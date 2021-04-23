const express = require ('express');
const router = express.Router();


//controllers
const{
    getWarehousesArr,
    getWarehouseId,
    postWarehouse,
    deleteWarehouse,
    putWarehouse,
} = require('../controllers/warehouses')

//routes for Warehouses
router.get('/', getWarehousesArr)
router.post('/', postWarehouse)
router.get('/:id', getWarehouseId)
router.delete('/:id', deleteWarehouse)
router.put('/:id', putWarehouse)




module.exports = router
