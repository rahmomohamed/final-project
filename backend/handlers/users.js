var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { generateAuthToken, requireAuthentication } = require("../utils/auth");
const {
  getUserByUserEmail,
  deleteUserByUserID,
  newUser,
  getUserByUserID,
} = require("../models/users");

router.get("/",/* requireAuthentication,*/ function (req, res, next) {
  const mongoDB = req.app.locals.mongoDB;
  const userID = req.body.userID;
  getUserByUserID(userID, mongoDB)
    .then((userObject) => {
      if (userObject) {
        res.status(200).json(userObject);
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "User not found",
      });
    });
});

router.post("/", (req, res) => {
  const mongoDB = req.app.locals.mongoDB;
  const { name, password, email } = req.body;

  getUserByUserEmail(email, mongoDB)
    .then((isNotUnique) => {
      if (isNotUnique) {
        res.status(400).json({
          error: "Existing email",
        });
      } else {
        return newUser(
          {
            name: name,
            password: password,
            email: email,
          },
          mongoDB
        );
      }
    })
    .then((insertId) => {
      res.status(201).json({
        id: insertId,
        name: name,
        email: email,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "User not added",
      });
    });
});

router.post("/login", function (req, res) {
  const mongoDB = req.app.locals.mongoDB;
  const { email, password } = req.body;
  let userObj = {};
  getUserByUserEmail(email, mongoDB, true)
    .then((user) => {
      if (user) {
        userObj = user;
        return bcrypt.compare(password, user.password);
      } else {
        return Promise.reject(401);
      }
    })
    .then((loginSuccessful) => {
      if (loginSuccessful) {
        return generateAuthToken(userObj.email, userObj._id);
      } else {
        return Promise.reject(401);
      }
    })
    .then((token) => {
      res.status(200).json({
        auth: true,
        token: token,
      });
    })
    .catch((err) => {
      if (err === 401) {
        res.status(401).json({
          error: "Invalid credentials.",
        });
      } else {
        res.status(500).json({
          error: "User not found.",
        });
      }
    });
});

router.delete("/:id", requireAuthentication, function (req, res, next) {
  const mongoDB = req.app.locals.mongoDB;
  const userId = req.params.id;
  if (req.userID !== userId) {
    res.status(403).json({
      error: "Access unauthorized",
    });
  } else {
    deleteUserByUserID(userId, mongoDB)
      .then((userObject) => {
        if (userObject) {
          res.status(204).send();
        } else {
          next();
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: "User not found",
        });
      });
  }
});

module.exports = router;
