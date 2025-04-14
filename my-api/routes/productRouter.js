const express = require('express');
const { getAllProducts, getProductById, addProducts, getSomeProduct } = require('../controllers/product-controller');

const router = express.Router();

// Get all products
router.get('/products', getAllProducts);

// Get a single product by ID
router.get('/products/:id', getProductById);

// Populate database with product data
router.post('/products', addProducts);

router.get('/products/featured', getSomeProduct);


module.exports = router;