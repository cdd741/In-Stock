const express = require ('express');
const router = express.Router();

//controllers from inventories

const{
    getInventoryArr,
    getInventoryId,
} = require('../controllers/inventories')

//routes
router.get('/', getInventoryArr)
router.get('/:id',getInventoryId)





module.exports = router
