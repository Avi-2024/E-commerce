const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRouter');
const authRoute = require('./routes/auth-router'); // Updated to CommonJS
const contactRoute = require('./routes/constact-router'); // Updated to CommonJS
const Product = require('./models/Product');
const addressRoutes = require('./routes/address-router'); // Updated to CommonJS
const orderRoute = require('./routes/order-router'); // Updated to CommonJS

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(0);
  }
};

// Routes
app.use('/api', productRoutes);
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/order", orderRoute);
app.use('/api/addresses', addressRoutes);



// const updateCategory = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI); // Ensure your .env file is configured
//     console.log('Connected to the database');

//     const result = await Product.updateMany(
//       { category: 'women_clothing' },
//       { $set: { category: 'Women Cloth' } }
//     );

//     console.log('Updated documents:', result);
//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error updating category:', error);
//   }
// };

// updateCategory();

// Start server
connectDB().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Sever Listening on PORT ${PORT}`);
  });
});