const Address = require("../models/address-model");

// Save address
const saveAddress = async (req, res) => {
  try {
    
    const { userId, name, phone, address, city, pincode } = req.body;

    // Validate required fields
    if (!userId || !name || !phone || !address || !city || !pincode) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Create a new address using the data from the frontend
    const newAddress = new Address({
      userId,
      name,
      phone,
      address,
      city,
      pincode,
    });
    await newAddress.save();
    res.status(201).json({ message: "Address saved successfully", addressId: newAddress._id });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving address" });
  }
};

// (Optional) Get addresses
const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching addresses" });
  }
};

const getUserAddresses = async (req, res) => {
  const { userId } = req.params;
  const address = await Address.findOne({ userId }); // Replace with your database query
  if (address) {
    res.json(address);
  } else {
    res.status(404).json({ error: "Address not found" });
  }
};


module.exports = { saveAddress, getAddresses ,getUserAddresses };
