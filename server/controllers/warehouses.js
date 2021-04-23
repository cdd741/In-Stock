const fs = require("fs");
const uuid = require("uuid");
const path = require("path");
warehouses = require("../data/warehouses.json");

//warehouses list
const getWarehousesArr = (req, res) => {
  res.status(200).json(warehouses);
};

//specific id for singlewarehouse
const getWarehouseId = (req, res) => {
  const warehouse = warehouses.find((warehouse) => {
    return warehouse.id === req.params.id;
  });
  if (!warehouse) {
    return res
      .status(404)
      .send({ success: false, msg: `warehouse ${req.params.id} is invalid` });
  }
  res.status(200).send(warehouse);
};

//post new wearhouse
const postWarehouse = (req, res) => {
  const newWarehouse = {
    id: uuid.v4(),
    name: req.body.warehouseName,
    address: req.body.streetAddress,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contactName,
      position: req.body.position,
      phone: req.body.phoneNumber,
      email: req.body.email,
    },
  };
  if (req.body) {
    warehouses.push(newWarehouse);
    const json = JSON.stringify(warehouses);
    fs.writeFileSync(path.resolve(__dirname, "../data/warehouses.json"), json);
    res.status(201).send(warehouses);
  } else {
    res.status(404).send({
      success: false,
      msg: "Further details still required!",
    });
  }
};

//delete warehouse
const deleteWarehouse = (req, res) => {
  const warehouseIndex = warehouses.findIndex((warehouse) => {
    return warehouse.id == req.params.id;
  });
  if (warehouseIndex >= 0) {
    warehouses.splice(warehouseIndex, 1);
    const json = JSON.stringify(warehouses);
    fs.writeFileSync(path.resolve(__dirname, "../data/warehouses.json"), json);
    res.status(201).send(warehouses);
  } else {
    res.status(404).send({
      success: false,
      msg: "No warehouse by that id!",
    });
  }
};
//edit warehouse
const putWarehouse = (req, res) => {
  const warehouse = warehouses.find((warehouse) => {
    return (warehouse.id = req.params.id);
  });
  if (warehouse) {
    warehouse.name = req.body.name;
    warehouse.address = req.body.address;
    warehouse.city = req.body.city;
    warehouse.country = req.body.country;
    warehouse.contact.name = req.body.name;
    warehouse.contact.position = req.body.position;
    warehouse.contact.phone = req.body.phone;
    warehouse.contact.email = req.body.email;

    const json = JSON.stringify(warehouses);
    fs.writeFileSync(path.resolve(__dirname, "../data/warehouses.json"), json);
    res.status(201).send(warehouse);
  } else {
    res.status(404).send({
      success: false,
      msg: `Warehouse with id = ${req.params.id} not found`,
    });
  }
};

module.exports = {
  getWarehousesArr,
  getWarehouseId,
  postWarehouse,
  deleteWarehouse,
  putWarehouse,
};
