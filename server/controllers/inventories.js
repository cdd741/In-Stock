inventories = require('../data/inventories.json');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

//inventory list
const getInventoryArr = (req,res)=>{
    res.status(200).send('HERE IS YOUR INVENTORY')
}

module.exports = {
    getInventoryArr,
}