const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: String,
  phone: String,
  address: String,
  city: String,
  pincode: String,
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
