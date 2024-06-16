const express = require("express");

// * MIDDLEWARES IMPORT

const {
  isAuthenticated,
  isAuthorized,
} = require("../middlewares/auth.middlewares.js");

// * CONTROLLERS IMPORT

const {
  signUp,
  signIn,
  myProfile,
  updatePhone,
  updateAddress,
  addAddress,
  updatePassword,
  getAllUsers,
} = require("../controllers/user.controllers.js");

const router = express.Router();

// * CONTROLLERS USE

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/me").get(isAuthenticated, myProfile);
router.route("/updatephone/?:_id").put(isAuthenticated, updatePhone);
router.route("/updateaddress/?:_id").put(isAuthenticated, updateAddress);
router.route("/addaddress/?:_id").put(isAuthenticated, addAddress);
router.route("/updatepassword/?:_id").put(isAuthenticated, updatePassword);
router.route("/users").get(isAuthenticated, isAuthorized("admin"), getAllUsers);

module.exports = router;
