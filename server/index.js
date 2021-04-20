const app = express();
const inventories = require ('./routes/inventories');
const warehouses = require ('./routes/warehouses');
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

//parse form data
app.use(express.urlenconded({extended:true}))

//parse json
app.use(express.json());

// cors
app.use(cors());
//
app.use(express.json());

//route
app.use('/inventories',inventories)
app.use('/warehouses',warehouses)

app.listen(PORT, () => {
    console.log("Listening on port 8080");
  });
