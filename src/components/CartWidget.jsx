import cart from "../assets/cart.svg";
import React, { useState } from "react";

export function CartWidget() {
  const [count, plusOne] = useState(0);
  return (
    <div className="cartWidget">
      <img src={cart} alt="cart_svg" onClick={() => plusOne(count + 1)} />
      <p>{count}</p>
    </div>
  );
}
