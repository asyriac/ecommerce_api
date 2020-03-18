const express = require("express");
const router = express.Router();
const productRoutes = require("./products");

// products handling
router.use("/products", productRoutes);

module.exports = router;
