const routera = require("express").Router();

const { login, register } = require("../controllers/Auth");

routera.post("/login", login);
routera.post("/reg", register);

module.exports = routera;
