const Product = require("../models/product.model");

// * CREATE NEW PRODUCT

exports.createProduct = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const newProduct = new Product({
      title: req.body.payload.title,
      category: req.body.payload.category,
      description: req.body.payload.description,
      // images: imageLinks,
      image: req.body.payload.image,
      price: req.body.payload.price,
      createdBy: req.user._id,
    });
    await newProduct.save();
    return res.status(201).json({
      success: true,
      newProduct,
      message: "Product created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Product creation failed. The error is ${error.message}`,
    });
  }
};

// * GET ALL PRODUCTS

exports.getAllProducts = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allProducts = await Product.find().populate("createdBy");

    res.status(200).json({
      success: true,
      products: allProducts,
      message: "Fetched all products!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};
