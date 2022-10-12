"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const personsRoutes = require("./handlers/persons");
const usersRoutes = require("./handlers/users");

// Setup ExpressJS server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/persons", personsRoutes);
app.use("/users", usersRoutes);

// Setup Mongodb connection
const mongoURL = process.env.MONGO_URI;
const mongoDBName = process.env.MONGO_DATABASE;

const mongoClient = new MongoClient(mongoURL);
mongoClient
  .connect()
  .then(() => {
    app.locals.mongoDB = mongoClient.db(mongoDBName);
    app.listen(8000, () => console.log(`web server listening on port 8000!`));
  })
  .catch(console.error)
  .finally(() => {
    console.log("MongoDB connection closed");
    // mongoClient.close();
  });
