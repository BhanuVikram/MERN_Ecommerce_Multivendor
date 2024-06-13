const express = require("express");

// * MIDDLEWARES IMPORT

const {
  isAuthenticated,
  isAuthorized,
} = require("../middlewares/auth.middlewares.js");

// * CONTROLLERS IMPORT

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/product.controllers.js");

const router = express.Router();

// * CONTROLLERS USE

router
  .route("/createproduct")
  .post(isAuthenticated, isAuthorized("vendor"), createProduct);

router.route("/products").get(getAllProducts);

router.route("/product/:_id").get(getSingleProduct);

module.exports = router;
