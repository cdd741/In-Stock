
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

//post new wearhouse
const postWarehouse = (req,res)=>{
    const newWarehouse = {
        id: uuid.v4(),
        name: req.body.name,
        address:req.body.address,
        city:req.body.city,
        contact:{
            name:req.body.name,
            position:req.body.position,
            phone:req.body.phone,
            email:req.body.email,
        }
    }
    if (req.body){
        warehouses.push(newWarehouse)
        const json = JSON.stringify(warehouses)
        fs.writeFileSync(path.resolve(__dirname,'../data/warehouses.json'),json)
        res.status(201).send(warehouses)
    }
    else {
        res.status(404).send({
            success:false,
            msg:'Further details still required!',
        })
    }
}

//delete warehouse
const deleteWarehouse = (req,res)=>{
    const warehouseIndex = warehouses.findIndex(warehouse=>{
        return warehouse.id == req.params.id
    })
    if (warehouseIndex>=0){
        warehouses.splice(warehouseIndex, 1)
        const json = JSON.stringify(warehouses)
        fs.writeFileSync(path.resolve(__dirname,'../data/warehouses.json'),json)
        res.status(201).send(warehouses)

    } else{
        res.status(404).send ('No warehouse by that id!')
    }
}

module.exports = {
    getWarehousesArr,
    getWarehouseId,
    postWarehouse,
    deleteWarehouse,
}