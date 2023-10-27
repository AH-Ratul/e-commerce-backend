const express = require("express");
const {userCollection} = require('../lib/Collection')
const route = express.Router();

route.use(express.json());

//--- GET route ---
route.get("/", (req, res) => {
  res.send("getting response");
});

// POST route
async function signUp() {
  try {
    route.post("/", async (req, res) => {
      try {
        const user = req.body;

        const result = await userCollection.insertOne(user);

        res.send(result);
        console.log("in db: ", result);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

signUp().catch(console.dir);

module.exports = route;
