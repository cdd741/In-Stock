const express = require ('express');
const router = express.Router();

//controllers from inventories
const{
    getInventoryArr,
} = require('../controllers/inventories')

//routes
router.get('/', getInventoryArr)





module.exports = router
