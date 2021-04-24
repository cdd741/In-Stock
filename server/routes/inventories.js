const express = require ('express');
const router = express.Router();

//controllers from inventories
const{
    getInventoryArr,
    getInventoryId,
    postInventoryArr,
    putInventoryId
} = require('../controllers/inventories')

//routes
router.get('/', getInventoryArr)
router.get('/:id', getInventoryId)
router.post('/', postInventoryArr)
router.put('/:id', putInventoryId)



module.exports = router
