
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
warehouses = require('../data/warehouses.json')

//warehouses list
const getWarehousesArr = (req,res)=>{
    res.status(200).json(warehouses)
}

//specific id for singlewarehouse
const getWarehouseId = (req,res)=>{
    const warehouse = warehouses.find((warehouse)=>{
        return warehouse.id===req.params.id;
    })
    if(!warehouse){
        return res
        .status(404)
        .json({success: false, msg:`warehouse ${req.params.id} is invalid`})
    }
    res.status(200).send(warehouse)
}

module.exports = {
    getWarehousesArr,
    getWarehouseId,
}