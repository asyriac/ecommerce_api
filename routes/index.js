const express = require("express");
const router = express.Router();
const version1_routes = require("./v1/index");

// v1 Route handling
router.use("/v1", version1_routes);

module.exports = router;
