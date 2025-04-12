const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 100, // Default stock 100
  },
  stars: {
    type: Number,
    default: 0,  
  },
  reviews: {
    type: Number,
    default: 0,   
  },
  image: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  shipping: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
