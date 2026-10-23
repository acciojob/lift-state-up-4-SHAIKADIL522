import React from "react";

const Child = ({ cartItems, onRemove }) => {
  return (
    <div className="child">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span id="itemName">{item.name}</span>
            {" - "}
            <span id="itemPrice">{item.price}</span>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;