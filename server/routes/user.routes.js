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
  getAllUsersByAdmin,
  getAllAgentsByAdmin,
  getAllVendorsByAdmin,
  getSingleUserByAdmin,
  getVendorUserByAgent,
  getRedactedAdminByAgent,
  getRedactedAgentByAgentVendorUser,
  getRedactedVendorByUser,
  getRedactedUserByVendor,
  getAllDisabledAgentsByAdmin,
  getAllDisabledVendorsByAdmin,
  getAllDisabledUsersByAdmin,
  enableAgentVendorUserByAdmin,
  disableAgentVendorUserByAdmin,
  disableVendorUserByAgent,
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
  .get(isAuthenticated, isAuthorized("admin"), getAllAgentsByAdmin);

router
  .route("/admin/vendors")
  .get(isAuthenticated, isAuthorized("admin"), getAllVendorsByAdmin);

router
  .route("/admin/users")
  .get(isAuthenticated, isAuthorized("admin"), getAllUsersByAdmin);

router
  .route("/admin/single-agent-vendor-user/:_id")
  .get(isAuthenticated, isAuthorized("admin"), getSingleUserByAdmin);

router
  .route("/agent/vendor-user/:_id")
  .get(isAuthenticated, isAuthorized("agent"), getVendorUserByAgent);

router
  .route("/agent/admin/:_id")
  .get(isAuthenticated, isAuthorized("agent"), getRedactedAdminByAgent);

router
  .route("/agent-vendor-user/agent/:_id")
  .get(
    isAuthenticated,
    isAuthorized("agent", "vendor", "user"),
    getRedactedAgentByAgentVendorUser
  );

router
  .route("/user/vendor/:_id")
  .get(isAuthenticated, isAuthorized("user"), getRedactedVendorByUser);

router
  .route("/vendor/user/:_id")
  .get(isAuthenticated, isAuthorized("vendor"), getRedactedUserByVendor);

router
  .route("/admin/disabled/agents/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledAgentsByAdmin);

router
  .route("/admin/disabled/vendors/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledVendorsByAdmin);

router
  .route("/admin/disabled/users/")
  .get(isAuthenticated, isAuthorized("admin"), getAllDisabledUsersByAdmin);

router
  .route("/admin/enable/:_id")
  .get(isAuthenticated, isAuthorized("admin"), enableAgentVendorUserByAdmin);

router
  .route("/admin/disable/:_id")
  .get(isAuthenticated, isAuthorized("admin"), disableAgentVendorUserByAdmin);

router
  .route("/agent/disable-vendor-user/:_id")
  .get(isAuthenticated, isAuthorized("agent"), disableVendorUserByAgent);

module.exports = router;
