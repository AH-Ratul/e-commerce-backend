const express = require('express');
const { adminCollection } = require('../lib/Collection');
const route = express.Router();

route.use(express.json());

// GET route
route.get("/", (req, res) => {
  res.send("admin response");
});

async function Admin() {
    try{
        route.post("/", async (req, res) => {
            try{
                const admin = req.body;
                const result = await adminCollection.insertOne(admin);
                res.send(result);
                console.log('in db: ', result);
            }catch (error) {
                console.log(error)
            }
        })

    }catch (error) {
        console.log(error)
    }
}

Admin().catch(console.dir);

module.exports = route;