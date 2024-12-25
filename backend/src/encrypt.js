const bcrypt = require("bcrypt");
const authenticate = require("jsonwebtoken");
const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (err) {
    throw new Error("Error hashing password: " + err);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (err) {
    throw new Error("Error comparing password: " + err);
  }
};

const generateToken = (userId, userEmail) => {
  const token = authenticate.sign({ userId: userId, userEmail }, "vinoth", {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (token) => {
  const decoded = authenticate.verify(token, "vinoth");
  return decoded;
};

module.exports = { hashPassword, comparePassword, generateToken,verifyToken };
