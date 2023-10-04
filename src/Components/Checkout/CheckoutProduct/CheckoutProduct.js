import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function CheckoutProduct({ id, img, title, price, rating, hidebutton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImg" src={img} />
      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        {!hidebutton && <button onClick={removeFromBasket}>Remove Item</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
