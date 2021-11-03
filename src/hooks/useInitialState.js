import { useState, useEffect } from "react";
import initialState from "../data/initialState";
import axios from "axios";

const API = "http://localhost:3006/products";

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //UseState que se encarga de tener los productos.
  const [products, setProducts] = useState([]);

  //useEffect para llamar el API y guardar el resultado en los productos.
  useEffect(() => {
    const getData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getData();
  }, []);

  const addToCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (items, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  const removeAllFromCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    removeAllFromCart,
    state,
    products,
  };
};
