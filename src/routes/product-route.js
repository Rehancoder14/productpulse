const express = require('express');
const { addProduct, getProduct, getCartData, addToCart } = require('../controllers/prod_controller');
const router = express.Router();


router.post('/',addProduct);
router.get('/', getProduct);
router.get('/cart',getCartData);
router.post('/cart',addToCart);


module.exports = router;