const { User } = require("../models/user-model.js");
const bcrypt = require("bcryptjs");

const Home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Hello World Home");
  } catch (error) {
    console.error("Home error", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// User Registration
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    res.status(200).json({
      msg: "Registration Successfully",
      token: await userCreated.generateToken(),
      userId: userCreated.id.toString(),
    });
  } catch (error) {
    console.error("Registration error", error);
    res.status(400).json({ msg: "Registration failed" });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login data", email, password);
    const userExist = await User.findOne({ email });
    console.log("USER", userExist);
    // if (userExist) {
    //   return res.status(400).json({ msg: "Invalid Credentials" });
    // }

    const saltRound = 10;
    const user = await bcrypt.hash(password, saltRound);   
    if (user) {
      res.status(200).json({
        msg: "Login Successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
        username : userExist.username,
      });
    } else {
      res.status(401).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Login error", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Get user data from User LogIn
const getUser = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.error(`Error from the user route: ${error}`);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { Home, register, login, getUser };

