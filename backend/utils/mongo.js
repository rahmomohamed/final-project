const ObjectId = require("mongodb").ObjectId;

function mongoID(id) {
  if (ObjectId.isValid(id)) {
    return { _id: new ObjectId(id) };
  } else {
    return { id: id };
  }
}

module.exports = {
  mongoID,
};
