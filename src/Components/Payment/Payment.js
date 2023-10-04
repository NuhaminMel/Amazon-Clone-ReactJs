import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { db } from "../../Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge customers
    const getClientSecret = async () => {
      //we multiply by 100 because all api requests expect to be provided in currency's smallest unit.

      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret);
      //   console.log(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("The client secret is >>>", clientSecret);

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent=payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (e) => {
    //this function handle buy now button
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length}items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123 home run</p>
            <p>New York, NY</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="paymentItems">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="paymentPriceContainer">
                <CurrencyFormat
                  renderText={(value) => <h4>Order Total: {value}</h4>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  className="buyNowbtn"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
