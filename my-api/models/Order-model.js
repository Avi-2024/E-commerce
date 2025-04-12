const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  address: {
    name: String,
    phone: String,
    address: String,
    city: String,
    pincode: String,
  },
  cart: Array,
  totalAmount: Number,
  paymentStatus: String,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
