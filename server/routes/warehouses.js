const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Warehouse Endpoint");
});

module.exports = router;
