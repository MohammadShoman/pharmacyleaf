const express = require("express");
const {
  createProduct,
  getAllProducts,
  deleteProductById,
} = require("./../controllers/products");
const productRouter = express.Router();

productRouter.post("/product", createProduct);
productRouter.get("/product", getAllProducts);
productRouter.delete("/product/:id", deleteProductById);

module.exports = productRouter;
