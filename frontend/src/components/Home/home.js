import axios from "axios";
import React, { useState, useEffect } from "react";
import "./home.css";
const Home = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setResult(result.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <div className="All-products">
        {result.map((elem, i) => {
          console.log(elem.image);
          return (
            <div className="product">
              <img src={elem.image} />
              <p>{elem.productName}</p>
              <p>{elem.description}</p>
              <p>{elem.price + " $"}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
