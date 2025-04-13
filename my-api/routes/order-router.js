const express = require('express');
const { createOrder, getOrders } = require('../controllers/order-controller');
const router = express.Router();


router.post('/createOrder', createOrder);

router.get('/getOrders', getOrders);

module.exports = router;