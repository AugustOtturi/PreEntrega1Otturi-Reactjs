import { FiShoppingCart } from "react-icons/fi";
import React, { useState } from "react";

export function CartWidget() {
  const [count, plusOne] = useState(0);
  return (
    <div className="cartWidget">
      <FiShoppingCart
        onClick={() => plusOne(count + 1)}
        className="ShoppingCart"
      />
      <p>{count}</p>
    </div>
  );
}
