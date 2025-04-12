const Product = require('../models/Product');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id){ // Validate MongoDB ObjectID format
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Populate database with product data
const addProducts = async (req, res) => {
  try {
    await Product.insertMany(req.body);
    res.status(201).json({ message: 'Products added successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getProductById, addProducts };
