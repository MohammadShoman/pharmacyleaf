import React, { useState } from "react";
import axios from "axios";
import "./admin-page.css";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/product", {
        image,
        productName,
        description,
        price,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="add-product">
        <h1>Add Product</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="image url"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="product name"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="price $"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
