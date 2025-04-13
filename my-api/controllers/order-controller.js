const Order = require("../models/Order-model");

// Create Order
const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order saved successfully", orderId: newOrder._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving order" });
  }
};

// Get All Orders (Optional)
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

module.exports = { createOrder, getOrders };
