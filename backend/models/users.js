const USERS_COLLECTION = "users";
const { mongoID } = require("../utils/mongo");
const bcrypt = require("bcryptjs");

const newUser = (userDocument, mongoDB) => {
  return new Promise((resolve, reject) => {
    const usersCollection = mongoDB.collection(USERS_COLLECTION);
    bcrypt.hash(userDocument.password, 8, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        userDocument.password = hash;
        usersCollection
          .insertOne(userDocument)
          .then((result) => {
            resolve(result.insertedId);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  });
}

const getUserByUserEmail = (email, mongoDB, includePassword) => {
  return new Promise((resolve, reject) => {
    const usersCollection = mongoDB.collection(USERS_COLLECTION);
    const projection = includePassword ? {} : { password: 0 };
    usersCollection
      .find({ email: email })
      .project(projection)
      .toArray()
      .then((results) => {
        resolve(results[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const getUserByUserID = (id, mongoDB) => {
  return new Promise((resolve, reject) => {
    const usersCollection = mongoDB.collection(USERS_COLLECTION);
    const _id = mongoID(id);
    usersCollection
      .find(_id)
      .toArray()
      .then((results) => {
        resolve(results[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const deleteUserByUserID = (id, mongoDB) => {
  const usersCollection = mongoDB.collection(USERS_COLLECTION);
  return usersCollection
    .deleteOne({ _id: id })
    .then((results) => {
      return Promise.resolve(results.deletedCount > 0);
    })
    .catch((err) => {
      reject(err);
    });
}

module.exports = {
  newUser,
  getUserByUserEmail,
  deleteUserByUserID,
  getUserByUserID,
};
