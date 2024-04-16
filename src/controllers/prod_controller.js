const Product  = require('../schema/product-schema');
const Cart = require('../schema/cart-schema');
const addProduct  = async(req, res)=>{
    try{
        const product = await Product.create(req.body);
        return res.status(201).json({
            error: false,
            message: "Product created successfully",
            data: product
        });

    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
            data: e
        });
    }
}

const getProduct = async(req, res)=>{
    try{
        const product = await Product.find();
        return res.status(200).json({
            error: false,
            message: "Product fetched successfully",
            data: product.map((item) => {
                const { __v, ...rest } = item.toObject();
                return rest;
              })
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
            data: e
        });
    }
}

const addToCart = async(req, res)=>{
    try{
        const {id} = req.body;
        console.log(id);
        let product = await Product.findOne({_id: id});
        console.log(product);
        if(!product){
            return res.status(404).json({
                error: true,
                message: "Product not found",
            });
        }
        let cart = await Cart.create({product: product});
        return res.status(200).json({
            error: false,
            message: "Product fetched successfully",
            data: cart
        })
    }
    catch(e){
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
            data: e
        });
    }
}

const getCartData = async(req, res)=>{
    try{
        let cart = await Cart.find();
        return res.status(200).json({
            error: false,
            message: "Cart fetched successfully",
            data: cart
        });
    }catch(e){
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
            data: e
        });
    }
}

module.exports = {
    addProduct,
    getProduct,
    addToCart,
    getCartData
};