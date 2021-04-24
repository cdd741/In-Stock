const fs = require("fs");
const uuid = require("uuid");
const path = require("path");
inventories = require("../data/inventories.json");

//inventory list
const getInventoryArr = (req, res) => {
  res.status(200).json(inventories);
};

//specific id for single item
const getInventoryId = (req, res) => {
  const item = inventories.find((item) => {
    return item.id === req.params.id;
  });
  if (!item) {
    return res
      .status(404)
      .json({ success: false, msg: `The item ${req.params.id} is invalid` });
  }
  res.status(200).send(item);
};

//delete id for single item
const deleteInventoryId = (req, res) => {
  res.send("delete");
};

module.exports = {
  getInventoryArr,
  getInventoryId,
  deleteInventoryId,
};
