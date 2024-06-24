const User = require("../models/user.model");

const getAllDisabledByRole = async (role) => {
  try {
    const users = await User.find();
    return users.filter((user) => user.role === role && user.status === false);
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = getAllDisabledByRole;
