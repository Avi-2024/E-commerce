const express = require('express');
const { saveAddress, getUserAddresses } = require('../controllers/address-controller');
const { getAddresses } = require('../controllers/address-controller');
const router = express.Router();

// POST save address
router.post('/', saveAddress);

// GET all addresses (optional)
router.get('/', getAddresses);

router.get("/:userId", getUserAddresses);

module.exports = router;
