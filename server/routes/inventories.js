 .const express = require("express");
const router = express.Router();

//controllers from inventories
const {
  getInventoryArr,
  getInventoryId,
  deleteInventoryId,
} = require("../controllers/inventories");

//routes
router.get("/", getInventoryArr);
router.get("/:id", getInventoryId);
router.delete("/:id", deleteInventoryId);

module.exports = router;
