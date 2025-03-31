import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/store";
import "../style/Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.title} - ${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
