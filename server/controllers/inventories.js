const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
inventories = require('../data/inventories.json')

//inventory list
const getInventoryArr = (req,res)=>{
    res.status(200).json(inventories);
}

module.exports = {
    getInventoryArr,
}