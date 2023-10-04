import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      {/* //unix?? */}
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderId">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          rating={item.rating}
          hidebutton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="orderTotal">OrderTotal: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
