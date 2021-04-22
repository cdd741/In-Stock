const express = require ('express');
const router = express.Router();


//controllers
const{
    getWarehousesArr,
    getWarehouseId,
    postWarehouse,
    deleteWarehouse,
} = require('../controllers/warehouses')

//routes for Warehouses
router.get('/', getWarehousesArr)
router.get('/:id', getWarehouseId)
router.post('/', postWarehouse)
router.delete('/:id', deleteWarehouse)




module.exports = router
