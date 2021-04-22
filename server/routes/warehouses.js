const express = require ('express');
const router = express.Router();


//controllers
const{
    getWarehousesArr,
    getWarehouseId,
} = require('../controllers/warehouses')

//routes for Warehouses
router.get('/', getWarehousesArr)
router.get('/:id', getWarehouseId)





module.exports = router
