const express = require ('express');
const router = express.Router();


//controllers
const{
    getWarehousesArr,
    getWarehouseId,
    postWarehouse,
} = require('../controllers/warehouses')

//routes for Warehouses
router.get('/', getWarehousesArr)
router.get('/:id', getWarehouseId)
router.get('/', postWarehouse)





module.exports = router
