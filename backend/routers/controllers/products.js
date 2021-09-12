const productModel = require("./../../db/models/products");

const createProduct = (req, res) => {
  const {image, productName, description, price } = req.body;
  const newProduct = new productModel({image, productName, description, price });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getAllProducts = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports={
    createProduct,
    getAllProducts
}
