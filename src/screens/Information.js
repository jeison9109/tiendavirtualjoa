import React, { useContext, useState } from "react";
import "../styles/Information.css";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import AppContext from "../context/AppContex";

export const Information = ({ history }) => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    address: "",
    apto: "",
    city: "",
    country: "",
    state: "",
    phone: "",
    cp: "",
  });

  const handleReturn = () => {
    if (history.length <= 2) {
      history.pushState("/");
    } else {
      history.goBack();
    }
  };

  const handleSubmit = (e) => {
    //dispatch({});
    history.push("/checkout/payment");
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
              onChange={handleInputChange}
              value={formValues.name}
            />
            <input
              type="text"
              placeholder="Correo Electronico"
              name="email"
              onChange={handleInputChange}
              value={formValues.email}
            />
            <input
              type="text"
              placeholder="Direccion"
              name="address"
              onChange={handleInputChange}
              value={formValues.address}
            />
            <input
              type="text"
              placeholder="Apto"
              name="apto"
              onChange={handleInputChange}
              value={formValues.apto}
            />
            <input
              type="text"
              placeholder="Ciudad"
              name="city"
              onChange={handleInputChange}
              value={formValues.city}
            />
            <input
              type="text"
              placeholder="Pais"
              name="country"
              onChange={handleInputChange}
              value={formValues.country}
            />
            <input
              type="text"
              placeholder="Ciudad"
              name="state"
              onChange={handleInputChange}
              value={formValues.state}
            />
            <input
              type="text"
              placeholder="Codigo Postal"
              name="cp"
              onChange={handleInputChange}
              value={formValues.cp}
            />
            <input
              type="text"
              placeholder="Telefono"
              name="phone"
              onChange={handleInputChange}
              value={formValues.phone}
            />
          </form>
        </div>

        <div className="Information-buttons">
          <div className="Information-back">
            <button onClick={handleReturn}>Regresar</button>
          </div>
          <Link to="/checkout/payment">
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </Link>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido: </h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span> ${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
