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
  getVendorOrUserByAgent,
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
  .route("/admin/agents")
  .get(isAuthenticated, isAuthorized("admin"), getAllAgents);
router
  .route("/admin/vendors")
  .get(isAuthenticated, isAuthorized("admin"), getAllVendors);
router
  .route("/admin/users")
  .get(isAuthenticated, isAuthorized("admin"), getAllUsers);
router
  .route("/admin/single-agent-vendor-user/:_id")
  .get(isAuthenticated, isAuthorized("admin"), getSingleUserByAdmin);
router
  .route("/agent/vendor-User/:_id")
  .get(isAuthenticated, isAuthorized("agent"), getVendorOrUserByAgent);
router
  .route("/vendor/user/:_id")
  .get(isAuthenticated, isAuthorized("vendor"), getRedactedUserByVendor);
router
  .route("/admin/disabled/agents/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledAgents);
router
  .route("/admin/disabled/vendors/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledVendors);
router
  .route("/admin/disabled/users/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledUsers);
router
  .route("/admin/enable/:_id")
  .get(isAuthenticated, isAuthorized("admin"), enableUser);

module.exports = router;
