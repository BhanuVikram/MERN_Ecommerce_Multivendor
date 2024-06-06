const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Enter your first name"],
  },
  lastname: {
    type: String,
    required: [true, "Enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Enter a valid email address"],
    unique: [true, "Email already exists"],
  },
  phone: {
    type: Number,
    required: [true, "Enter your phone number without spaces or symbols"],
    maxlength: [10, "Phone number cannot exceed ten characters"],
  },
  addresses: [
    {
      addressLineOne: {
        type: String,
        required: [true, "Enter your street address"],
      },
      addressLineTwo: {
        type: String,
      },
      city: {
        type: String,
        required: [true, "Enter your city"],
      },
      state: {
        type: String,
        required: [true, "Enter your state"],
      },
      zip: {
        type: Number,
        required: [true, "Enter your Zip Code"],
        minlength: [5, "Zip code cannot be less than five digits"],
        maxlength: [5, "Zip code cannot exceed five digits"],
      },
    },
  ],
  password: {
    type: String,
    minlength: [8, "Password cannot be shorter than eight characters"],
    required: [true, "Enter a valid password"],
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin", "agent", "vendor"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordTime: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

userSchema.methods.verifyToken = async function (token) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded) {
    return decoded;
  } else {
    return false;
  }
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
