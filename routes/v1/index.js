const express = require("express");
const router = express.Router();
const productRoutes = require("./products");

// products route handling
router.use("/products", productRoutes);

module.exports = router;
