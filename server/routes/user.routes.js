const express = require("express");

// * MIDDLEWARES IMPORT

const { isAuthenticated } = require("../middlewares/auth.middlewares.js");

// * CONTROLLERS IMPORT

const {
  signUp,
  signIn,
  myProfile,
  updatePhone,
} = require("../controllers/user.controllers.js");

const router = express.Router();

// * CONTROLLERS USE

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/me").get(isAuthenticated, myProfile);
router.route("/updatephone/?:_id").put(isAuthenticated, updatePhone);

module.exports = router;
