import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";

import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const {getTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log("all p");
  console.log(all_product.length);
  console.log(all_product);
  console.log("cart items");
  console.log(cartItems);
  return (
    <div className="cartitems">
      {all_product.map(() => {
        <p>fjakdfjd</p>;
      })}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />



      {
  all_product.map((e) => {
    if (cartItems[e.id] > 0) {
      return (
        <div key={e.id}>
          <div className="cartitems-format cartitems-format-main">
            <img src={e.image} className="carticon-product-icon" alt="" />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <button className="cartitems-quantity">{cartItems[e.id]}</button>
            <p>${e.new_price * cartItems[e.id]}</p>

            <img
              src={remove_icon}
              className="carticon-remove-icon"
              alt=""
              onClick={() => removeFromCart(e.id)}
            />
          </div>
          <hr />
        </div>
      );
    }
    // Make sure to return null or something appropriate here if the condition isn't met
    return null;
  })
}

<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
            </div>
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalAmount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>

    </div>
    <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cartitems-promobox">
            <input type="text" placeholder="promo code"/>
            <button>Submit</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default CartItems;
