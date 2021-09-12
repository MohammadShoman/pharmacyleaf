const express = require('express');
const {createProduct,getAllProducts } = require('./../controllers/products');
const productRouter = express.Router();

productRouter.post('/product',createProduct)
productRouter.get('/product',getAllProducts)

module.exports =productRouter

