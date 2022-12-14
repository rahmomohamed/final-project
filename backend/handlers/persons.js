var express = require("express");
var router = express.Router();
const { requireAuthentication } = require("../utils/auth");
const {
  getPersonsByStatus,
  getPersonByID,
  newPerson,
  updatePersonStatus,
  submitTip,
} = require("../models/persons");

router.get("/", function (req, res) {
  const mongoDB = req.app.locals.mongoDB;

  getPersonsByStatus(null, mongoDB)
    .then((personsObject) => {
      if (personsObject) {
        res.status(200).json(personsObject);
      } else {
        res.status(200).json([]);
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "Persons not found",
      });
    });
});

router.get("/:personID", function (req, res) {
  const mongoDB = req.app.locals.mongoDB;
  const { personID } = req.params;

  getPersonByID(personID, mongoDB)
    .then((personObject) => {
      console.log(personObject);
      if (personObject) {
        res.status(200).json(personObject);
      } else {
        res.status(404).json({
          error: `Person not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "Person not found",
      });
    });
});

router.post("/:personID/tip", requireAuthentication, function (req, res) {
  const { personID } = req.params;
  if (!personID) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    const mongoDB = req.app.locals.mongoDB;
    submitTip(personID, req.body.name, req.body.info, mongoDB).then(
      (personObject) => {
        if (personObject) {
          res.status(201).json(personObject);
        } else {
          res.status(404).json({
            error: `Person not found`,
          });
        }
      }
    );
  }
});

router.post("/:personID/found", requireAuthentication, function (req, res) {
  const { personID } = req.params;
  if (!personID) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    const mongoDB = req.app.locals.mongoDB;
    updatePersonStatus(personID, "FOUND", mongoDB).then((personObject) => {
      if (personObject) {
        res.status(200).json(personObject);
      } else {
        res.status(404).json({
          error: `Person not found`,
        });
      }
    });
  }
});

router.post("/", requireAuthentication, function (req, res) {
  if (!req.body.name) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    const mongoDB = req.app.locals.mongoDB;
    newPerson(
      {
        name: req.body.name,
        age: req.body.age,
        status: "MISSING",
        lat: req.body.lat,
        lng: req.body.lng,
        lastseen: new Date(),
      },
      mongoDB
    )
      .then((personID) => {
        if (personID) {
          res.status(201).json({
            message: "Person not found",
            id: personID,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Person not added",
          error: err,
        });
      });
  }
});

module.exports = router;
