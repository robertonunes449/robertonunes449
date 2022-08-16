const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();
const authController = require("../controllers/AuthController");

router.post('/login', authController.login);
router.post('/register', authController.register);

router.use(AuthController.check_token);
router.get('/user', AuthController.user_data);

module.exports = router;