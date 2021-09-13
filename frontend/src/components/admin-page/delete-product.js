import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin-page.css";
const DeleteProduct = () => {
  const [result, setResult] = useState([]);
  const [deleteButton, setDeleteButton] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {});
  }, [result]);

  const Delete = (id) => {
    axios
      .delete(`http://localhost:5000/product/${id}`)
      .then((result) => {})
      .catch((err) => {});
  };
  return (
    <>
      <div className="all-products">
        <h1>pick one and click delete</h1>
        {result.map((elem, i) => {
          return (
            <div className="delete-product">
              <input
                type="checkbox"
                value={elem._id}
                onChange={(e) => {
                  setDeleteButton(e.target.value);
                }}
              />
              <img src={elem.image} />
              <p>{elem.productName}</p>
              <p>{elem.price + "$"}</p>
            </div>
          );
        })}
        <button
          onClick={() => {
            Delete(deleteButton);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default DeleteProduct;
