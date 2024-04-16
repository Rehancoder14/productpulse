const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    product: { type: Object, ref: 'Product' },
    count: {
      type: Number,
      default: 1,
      required : true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
