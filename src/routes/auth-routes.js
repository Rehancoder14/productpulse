const express = require('express');
const validateToken = require('../middleware/validate-token');
const {loginUser, registerUser} = require('../controllers/user-controller');

const router = express.Router();

router.post('/login',loginUser  );
router.post('/register', registerUser);

module.exports = router;