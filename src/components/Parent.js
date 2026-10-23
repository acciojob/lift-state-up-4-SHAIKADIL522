import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Banana", price: 30 },
    { id: 3, name: "Orange", price: 40 },
  ]);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="parent">
      <h2>Shopping Cart</h2>
      <Child cartItems={cartItems} onRemove={handleRemove} />
    </div>
  );
};

export default Parent;