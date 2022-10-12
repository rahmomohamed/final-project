const { mongoID } = require("../utils/mongo");
const PERSONS_COLLECTION = "persons";

const newPerson = (personDoc, mongoDB) => {
  return new Promise((resolve, reject) => {
    const personsCollection = mongoDB.collection(PERSONS_COLLECTION);
    personsCollection
      .insertOne(personDoc)
      .then((result) => {
        resolve(result.insertedId);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getPersonsByStatus = (personStatus, mongoDB) => {
  return new Promise((resolve, reject) => {
    const personsCollection = mongoDB.collection(PERSONS_COLLECTION);
    personsCollection
      .find()
      .toArray()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getPersonByID = (personID, mongoDB) => {
  return new Promise(function (resolve, reject) {
    const personsCollection = mongoDB.collection(PERSONS_COLLECTION);
    const _id = mongoID(personID);
    personsCollection
      .findOne(_id)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deletePerson = (personID, mongoDB) => {
  return new Promise((resolve, reject) => {
    const personsCollection = mongoDB.collection(PERSONS_COLLECTION);
    const _id = generateMongoIDQuery(personID);
    personsCollection
      .deleteOne(_id)
      .then((result) => {
        resolve(result.deletedCount > 0);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  newPerson,
  getPersonsByStatus,
  getPersonByID,
  deletePerson,
};
