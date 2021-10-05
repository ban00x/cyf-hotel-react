import React, { useState } from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div className="restaurant-component">
      <h3>Restaurant Orders</h3>
      <ul className="restaurant-orders">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
