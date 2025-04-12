const express = require('express');
const { Home, register, login, getUser } = require('../controllers/auth-controller.js');
const { validate } = require('../middleware/validate-middleware.js');
const { signinSchema, signupSchema } = require('../validators/auth-validator.js');
const { authMiddleware } = require('../middleware/auth-middleware.js');

const router = express.Router();

// router.route("/").get(Home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(signinSchema), login);
router.route("/user").get(authMiddleware, getUser);

module.exports = router;
