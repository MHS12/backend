const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const key = "Amahesh@22a4";

const encryptjwt = async (payload, time) => {
  return await jwt.sign(payload, key);
};

const decryptjwt = async (token) => {
  try {
    return await jwt.verify(token, key);
  } catch {
    return null;
  }
};

const hashpassword = async (password) => {
  return await bcrypt.hash(password, 11);
};

const comparePassword = async (password, passwordDb) => {
  return await bcrypt.compare(password, passwordDb);
};

const generateId = () => {
  return uuidv4();
};

module.exports = {
  encryptjwt,
  decryptjwt,
  hashpassword,
  comparePassword,
  generateId,
};
