const express = require("express");
const router = express.Router();
const productController = require("../../controllers/v1/products");

// Route handling
router.get("/", productController.get_products);
router.post("/create", productController.create_product);
router.delete("/:id", productController.delete_product);
router.get("/:id/update_quantity", productController.update_quantity);

module.exports = router;
