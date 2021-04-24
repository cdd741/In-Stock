
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const { url } = require('inspector');
inventories = require('../data/inventories.json')

//inventory list
const getInventoryArr = (req,res)=>{
    res.status(200).json(inventories);
}

//specific id for single item
const getInventoryId = (req,res)=>{
    const item = inventories.find((item)=>{
        return item.id===req.params.id;
    })
    if(!item){
        return res
        .status(404)
        .json({success: false, msg:`The item ${req.params.id} is invalid`})
    }
    res.status(200).send(item)
}

//post a new item to the inventories database
const postInventoryArr = (req, res) => {
    let newItem = req.body;
    if (Object.keys(newItem).length !== 8 && newItem.status === 'In Stock'){
        res.send("Not a valid inventory item")
    }else {
        if (newItem.status === 'Out of Stock'){
            newItem.quantity = 0;
        } 
        inventories.push(newItem);
        fs.writeFileSync(
            process.cwd() + '/data/inventories.json', 
            JSON.stringify(inventories), 
            err => console.log(err)
        );
        res.send(inventories);
    }
}

//put functionality
const putInventoryId = (req, res) => {
    let editedItem = req.body;
    let index = inventories.findIndex(item => item.id === editedItem.id);
    inventories.splice(index, 1, editedItem)
    fs.writeFileSync(
        process.cwd() + '/data/inventories.json', 
        JSON.stringify(inventories), 
        err => console.log(err)
    );
    res.send(inventories)
} 

module.exports = {
    getInventoryArr,
    getInventoryId,
    postInventoryArr, 
    putInventoryId
}