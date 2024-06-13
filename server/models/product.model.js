const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: [12, "Product title cannot be shorter than 12 characters"],
    maxlength: [120, "Product title cannot be longer than 120 characters"],
    required: [true, "Enter product title"],
  },
  category: {
    type: String,
    minlength: [3, "Cateogory cannot shorter than 3 characters"],
    maxlength: [12, "Cateogory cannot be longer than 12 characters"],
    required: [true, "Select a category"],
  },
  description: {
    type: String,
    minlength: [100, "Description cannot shorter than 100 characters"],
    maxlength: [2500, "Description cannot be longer than 2500 characters"],
    required: [true, "Enter product description"],
  },
  image: [
    {
      public_id: {
        type: String,
        required: [true],
      },
      url: {
        type: String,
        required: [true],
      },
    },
  ],
  price: {
    type: Number,
    required: [true, "Enter price"],
  },
  totalQuantity: {
    type: Number,
  },
  quantitySold: {
    type: Number,
  },
  quantityRemaining: {
    type: Number,
  },
  inStock: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      type: String,
      minlength: [100, "Review cannot be shorter than 100 characters"],
      maxlength: [1000, "Review cannot be longer than 1000 characters"],
    },
  ],
  ratings: [
    {
      type: Number,
      min: [1, "Rating cannot be less than 1"],
      max: [5, "Rating cannot be greater than 5"],
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
