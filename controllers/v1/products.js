const Product = require("../../models/products");

module.exports.create_product = async function(req, res) {
  try {
    const lastEntry = await Product.find({})
      .sort({ productId: -1 })
      .limit(1);
    let productId;
    if (lastEntry.length == 0) {
      productId = 1;
    } else {
      productId = lastEntry[0].productid + 1;
    }
    let newEntry = await Product.create({
      productid: productId,
      name: req.body.name,
      quantity: Number(req.body.quantity)
    });
    return res.status(201).json({
      data: {
        product: newEntry
      }
    });
  } catch (err) {
    console.log("Error creating product", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};

module.exports.get_products = async function(req, res) {
  try {
    let products = await Product.find({}, { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    return res.status(200).json({
      data: {
        products: products
      }
    });
  } catch (err) {
    console.log("Error fetching products", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};

module.exports.delete_product = async function(req, res) {
  try {
    await Product.findOne({ productid: Number(req.params.id) });
    Product.remove();
    return res.status(200).json({
      data: {
        message: "product deleted"
      }
    });
  } catch (err) {
    console.log("Error deleting product", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};

module.exports.update_quantity = async function(req, res) {
  try {
    let product = await Product.findOne({ productid: Number(req.params.id) });
    product.quantity = Number(product.quantity) + Number(req.query.number);
    await Product.updateOne(product);
    return res.status(200).json({
      data: {
        product: product,
        message: " Updated successfully"
      }
    });
  } catch (err) {
    console.log("Error updating product", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};
