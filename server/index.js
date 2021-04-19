const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const warehousesRoute = require("./routes/warehouses");
const inventoriesRoute = require("./routes/inventories");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/warehouses", warehousesRoute);
app.use("/inventories", inventoriesRoute);

app.listen(PORT, () => {
  console.log("Listening on port 8080");
});
