const express = require("express");
const router = express.Router();

//controllers from inventories
const {
  getInventoryArr,
  getInventoryId,
<<<<<<< HEAD
  deleteInventoryId,
=======
>>>>>>> main
} = require("../controllers/inventories");

//routes
router.get("/", getInventoryArr);
router.get("/:id", getInventoryId);
<<<<<<< HEAD
router.delete("/:id", deleteInventoryId);
=======
>>>>>>> main

module.exports = router;
