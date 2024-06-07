const User = require("../models/user.model.js");

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

  console.log("!!!!!!!!!!!!!!!!! Request Body:", req.body);

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

// * MY PROFILE

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
