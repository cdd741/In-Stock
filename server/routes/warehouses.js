const express = require ('express');
const router = express.Router();


//controllers
const{
    getWarehousesArr
} = require('../controllers/warehouses')

//routes
router.get('/', getWarehousesArr)





module.exports = router