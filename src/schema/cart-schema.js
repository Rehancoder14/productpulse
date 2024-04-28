const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema(
  {
    product: String,

    image: String,
    buyLink: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
