const express = require("express");
const {userCollection} = require('../lib/Collection');
const { ObjectId } = require("mongodb");
const route = express.Router();

route.use(express.json());

// GET route
route.get("/", (req, res) => {
  res.send("login response");
});

// POST route
async function login() {
  try {
    route.post("/", async (req, res) => {
      const { email, password } = req.body;
      console.log(req.body);

      const user = await userCollection.findOne({ email });

      if (!user || user.password != password) {
        console.log("login error");
      }
      console.log("from db: ", user);
      res.send(user);
    });
  } catch (error) {
    console.error(error);
  }
}

login().catch(console.dir);

module.exports = route;
