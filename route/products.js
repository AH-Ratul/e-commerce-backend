const express = require("express");
const { adminCollection } = require("../lib/Collection");
const route = express.Router();

// Middleware to parse JSON
route.use(express.json());

// GET route to fetch products
route.get("/", async (req, res) => {
  const id = req.query.id;
  try {
    if (!id) {
      const result = await adminCollection.find().toArray();
      res.json(result);
    } else {
      const query = { id: id };
      const result = await adminCollection.find(query).toArray();
      res.json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

module.exports = route;
