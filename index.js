const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 5000;

//----- middlewares ----------
app.use(cors());
app.use(express.json());

//------------------- import Routes ----------------
const signup = require("./route/signUp");
const login = require("./route/login");
const admin = require("./route/admin");
const products = require("./route/products");

//-------------------- Routes -----------------------
app.use("/signup", signup);
app.use("/login", login);
app.use("/admin", admin);
app.use("/products", products);

//------------------- API Route ---------------------
app.get("/", (req, res) => {
  res.send("server is listening at port " +port);
});

//------------- Start the Server ---------------------
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
