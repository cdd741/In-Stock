
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
warehouses = require('../data/warehouses.json')

//warehouses list
const getWarehousesArr = (req,res)=>{
    res.status(200).json(warehouses)
}

module.exports = {
    getWarehousesArr,
}