const User = require("../models/user.model");

const getUsersByRole = async (role) => {
  try {
    const users = await User.find();
    return users.filter((user) => user.role === role);
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = getUsersByRole;
