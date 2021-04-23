const express = require ('express');
const router = express.Router();

//controllers from inventories
const{
    getInventoryArr,
    getInventoryId,
    postInventoryArr
} = require('../controllers/inventories')

//routes
router.get('/', getInventoryArr)
router.get('/:id', getInventoryId)
router.post('/', postInventoryArr)




module.exports = router
