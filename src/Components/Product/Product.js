import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, price, img, rating }) {
  //{basket} is state in the provider component
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="img" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
