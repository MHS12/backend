const routescan = require("express").Router();

const { scanqr } = require("../controllers/Scan");

routescan.get("/scaned", scanqr);

module.exports = routescan;
