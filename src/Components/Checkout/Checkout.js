import React from "react";
import CheckoutImg from "../../Images/checkout.png";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img className="checkoutAd" src={CheckoutImg} alt="" />
        <h3>Hello</h3>
        <h2 className="checkoutTitle">Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
