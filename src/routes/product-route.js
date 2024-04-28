const express = require('express');
const { getCartData, addToCart } = require('../controllers/prod_controller');
const router = express.Router();


router.get('/cart',getCartData);
router.post('/cart',addToCart);


module.exports = router;