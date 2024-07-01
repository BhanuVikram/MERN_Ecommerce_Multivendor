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
  signOut,
  myProfile,
  updatePhone,
  updateAddress,
  addAddress,
  updatePassword,
  getAllUsers,
  getAllAgents,
  getAllVendors,
  getSingleUserByAdmin,
  getRedactedUserByVendor,
  getAllDisabledAgents,
  getAllDisabledVendors,
  getAllDisabledUsers,
  enableUser,
} = require("../controllers/user.controllers.js");

const router = express.Router();

// * CONTROLLERS USE

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/signout").get(isAuthenticated, signOut);
router.route("/me").get(isAuthenticated, myProfile);
router.route("/updatephone/?:_id").put(isAuthenticated, updatePhone);
router.route("/updateaddress/?:_id").put(isAuthenticated, updateAddress);
router.route("/addaddress/?:_id").put(isAuthenticated, addAddress);
router.route("/updatepassword/?:_id").put(isAuthenticated, updatePassword);
router
  .route("/agents")
  .get(isAuthenticated, isAuthorized("admin"), getAllAgents);
router
  .route("/vendors")
  .get(isAuthenticated, isAuthorized("admin"), getAllVendors);
router.route("/users").get(isAuthenticated, isAuthorized("admin"), getAllUsers);
router
  .route("/user/:_id")
  .get(isAuthenticated, isAuthorized("admin"), getSingleUserByAdmin);
router
  .route("/vendor/user/:_id")
  .get(isAuthenticated, isAuthorized("vendor"), getRedactedUserByVendor);
router
  .route("/disabled/agents/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledAgents);
router
  .route("/disabled/vendors/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledVendors);
router
  .route("/disabled/users/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledUsers);
router
  .route("/enable/:_id")
  .get(isAuthenticated, isAuthorized("admin"), enableUser);

module.exports = router;
