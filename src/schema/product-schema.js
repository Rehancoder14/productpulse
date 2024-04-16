const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
  date: Date
});

const productSchema = new mongoose.Schema({
  product_id: String,
  title: String,
  description: String,
  amazon_price: Number,
  flipkart_price: Number,
  original_price: Number,
  Currency: String,
  features: [String],
  image_urls: [String],
  amazon_buy_link: String,
  flipkart_buy_link: String,
  availability: String,
  ratings: {
    average_rating: Number,
    total_ratings: Number
  },
  reviews: [reviewSchema]
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
