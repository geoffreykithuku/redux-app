import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";

const ProductList = () => {
  // useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
  const dispatch = useDispatch();
  const fetchdata = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="ui grid container">
    <h1>Product List</h1>
      <Product />
    </div>
  );
};

export default ProductList;
