const express = require("express");
const app = express();
require("dotenv").config();
const inventories = require("./routes/inventories");
const warehouses = require("./routes/warehouses");
const cors = require("cors");

const { PORT } = process.env;

//parse form data
app.use(express.urlencoded({ extended: true }));

//parse json
app.use(express.json());

// cors
app.use(cors());

//route
app.use("/inventories", inventories);
app.use("/warehouses", warehouses);

app.listen(PORT, () => {
  console.log("Listening on port 8080");
});
