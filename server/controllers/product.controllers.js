const Product = require("../models/product.model");

// * CREATE NEW PRODUCT - VENDOR

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

// * GET ALL PRODUCTS - ALL

exports.getAllProducts = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allProducts = await Product.find().populate("createdBy");

    res.status(200).json({
      success: true,
      products: allProducts,
      message: "Fetched all products successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET A SINGLE PRODUCT - ALL

exports.getSingleProduct = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleProduct = await Product.findById(req.params._id).populate(
      "createdBy"
    );
    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    res.status(200).json({
      success: true,
      singleProduct,
      message: "Fetched the product successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * UPDATE A PRODUCT - ADMIN, VENDOR

exports.updateProduct = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleProduct = await Product.findById(req.params._id);
    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    singleProduct = await Product.findByIdAndUpdate(
      req.params._id,
      req.body.payload,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.status(200).json({
      success: true,
      singleProduct,
      message: "Product updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

