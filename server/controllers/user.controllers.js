const User = require("../models/user.model.js");
const getUsersByRole = require("../utils/getUsersByRole");
const getAllDisabledByRole = require("../utils/getAllDisabledByRole");

// * SIGN UP

exports.signUp = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    if (!req.body.payload) {
      return res.status(400).json({
        success: false,
        message: "Request body must contain 'payload' property",
      });
    }
    const newUser = new User({
      firstname: req.body.payload?.firstname,
      lastname: req.body.payload?.lastname,
      email: req.body.payload?.email,
      phone: req.body.payload?.phone,
      addresses: req.body.payload?.addresses,
      password: req.body.payload?.password,
    });
    await newUser.save();

    const token = await newUser.generateToken();

    return res.status(201).json({
      success: true,
      newUser,
      token,
      message: "Sign up successful!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Sign up failed. The error is ${error.message}`,
    });
  }
};

// * SIGN IN

exports.signIn = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const { email, password } = req.body.payload;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Email and password fields cannot be empty",
      });
    }

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const isSamePassword = await user.comparePassword(password);

    if (!isSamePassword) {
      return res.status(404).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = await user.generateToken();
    res.status(200).json({
      success: true,
      user,
      token,
      message: "Log in successful!",
      expires: process.env.JWT_EXPIRE,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Log in error: ${error.message}`,
    });
  }
};

// * SIGN OUT

exports.signOut = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Log out successful",
  });
};

// * MY PROFILE – ADMIN, AGENT, VENDOR, USER

exports.myProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user).populate(
      "firstname lastname email phone addresses createdAt role"
    );

    res.status(200).json({
      success: true,
      user,
      message: "User profile fetched successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `User profile error: ${error.message}`,
    });
  }
};

// * UPDATE PHONE NUMBER – ADMIN, AGENT, VENDOR, USER

exports.updatePhone = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Profile not found!",
      });
    }
    user = await User.findByIdAndUpdate(req.params._id, req.body.payload, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return res.status(200).json({
      success: true,
      user,
      message: "Phone number updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * UPDATE ADDRESS – ADMIN, AGENT, VENDOR, USER

exports.updateAddress = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Profile not found!",
      });
    }
    user = await User.findByIdAndUpdate(req.params._id, req.body.payload, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return res.status(200).json({
      success: true,
      user,
      message: "Address updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * ADD ADDRESS – ADMIN, AGENT, VENDOR, USER

exports.addAddress = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Profile not found!",
      });
    }

    let currentAddresses = user.addresses || [];
    let newAddress = currentAddresses.concat(req.body.payload);
    user.addresses = newAddress;

    await user.save();

    user = await User.findByIdAndUpdate(req.params._id, req.body.payload, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return res.status(200).json({
      success: true,
      user,
      message: "Address added successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * UPDATE PASSWORD – ADMIN, AGENT, VENDOR, USER

exports.updatePassword = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let user = await User.findById(req.params._id).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Profile not found!",
      });
    }

    let oldPassword = req.body.payload.oldPassword;
    let newPassword = req.body.payload.newPassword;

    const isSamePassword = await user.comparePassword(oldPassword);

    if (!isSamePassword) {
      return res.status(404).json({
        success: false,
        message: "Incorrect password",
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      user,
      message: "Password updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL AGENTS - ADMIN

exports.getAllAgents = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allAgents = await getUsersByRole("agent");
    let totalNumberOfAgents = allAgents.length;

    res.status(200).json({
      success: true,
      allAgents,
      totalNumberOfAgents,
      message: "Fetched all agents successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL VENDORS - ADMIN

exports.getAllVendors = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allVendors = await getUsersByRole("vendor");
    let totalNumberOfVendors = allVendors.length;

    res.status(200).json({
      success: true,
      allVendors,
      totalNumberOfVendors,
      message: "Fetched all vendors successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL USERS - ADMIN

exports.getAllUsers = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allUsers = await getUsersByRole("user");
    let totalNumberOfUsers = allUsers.length;

    res.status(200).json({
      success: true,
      allUsers,
      totalNumberOfUsers,
      message: "Fetched all users successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET A SINGLE AGENT, VENDOR, USER - ADMIN

exports.getSingleUserByAdmin = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleUser = await User.findById(req.params._id);
    if (!singleUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    res.status(200).json({
      success: true,
      singleUser,
      message: "Fetched user successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET A SINGLE REDACTED USER - VENDOR

exports.getRedactedUserByVendor = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleUser = await User.findById(req.params._id);
    if (!singleUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    let redactedUserData = {};

    redactedUserData.firstname = singleUser.firstname;
    redactedUserData.lastname = singleUser.lastname;

    res.status(200).json({
      success: true,
      redactedUserData,
      message: "Fetched the user successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL DISABLED AGENTS - ADMIN

exports.getAllDisabledAgents = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allDisabledAgents = await getAllDisabledByRole("agent");
    let totalNumberOfDisabledAgents = allDisabledAgents.length;

    res.status(200).json({
      success: true,
      allDisabledAgents,
      totalNumberOfDisabledAgents,
      message: "Fetched all disabled agents successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL DISABLED VENDORS - ADMIN

exports.getAllDisabledVendors = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allDisabledVendors = await getAllDisabledByRole("vendor");
    let totalNumberOfDisabledVendors = allDisabledVendors.length;

    res.status(200).json({
      success: true,
      allDisabledVendors,
      totalNumberOfDisabledVendors,
      message: "Fetched all disabled vendors successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL DISABLED USERS - ADMIN

exports.getAllDisabledUsers = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allDisabledUsers = await getAllDisabledByRole("user");
    let totalNumberOfDisabledUsers = allDisabledUsers.length;

    res.status(200).json({
      success: true,
      allDisabledUsers,
      totalNumberOfDisabledUsers,
      message: "Fetched all disabled users successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * ENABLE AGENT, VENDOR, OR USER STATUS - ADMIN

exports.enableUser = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleUser = await User.findById(req.params._id);
    if (!singleUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    if (singleUser.status === false) {
      singleUser.status = true;
      singleUser.save();

      res.status(200).json({
        success: true,
        singleUser,
        message: "User enabled successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User is already enabled.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};
