const express = require ('express');
const router = express.Router();

//controllers from inventories
const{
    getInventoryArr,
} = require('../controllers/inventories')

//controllers from warehouses
const{
    getWarehousesArr,
} = require('../controllers/warehouses')

//routes
router.get('/', getInventoriesArr)





module.exports = router
