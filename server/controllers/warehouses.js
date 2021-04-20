inventories = require('../data/warehouses.json');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

//inventory list
const getWarehousesArr = (req,res)=>{
    res.status(200).send('HERE IS YOUR WAREHOUSES')
}

module.exports = {
    getWarehousesArr,
}