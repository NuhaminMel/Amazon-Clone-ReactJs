const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

// why do we use the secret key here?
const stripe = require("stripe")(
  "sk_test_51Nv6ivGljvyPVV4pwNdqB4ahizwVfYjd5EZIlaT9PjC83AX12ZJr85vOzg4IYk3gzBOxujdujWd1tqSFghguzq9X00qTnJjdE9"
);
// another way writing the above stripe key is by creating .env file
// const stripe = new Stripe(process.env.STRIPE_API_KEY);

// App config
const app = express();

// Middlewares why origin?
app.use(cors({ origin: true }));

app.use(express.json());

// app.get("/", (req, res) => res.status(200).send("Hello World"));
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.get("/EVA", (req, res) => res.status(200).send("Hello HELLO"));

// post request method form the given router
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // status code differes here because it means it is working fine
  // and has created the request we wanted (OK and Created)
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
// exports.myFunction = functions.https.onRequest(app);

// what is cloud function??

// http://127.0.0.1:5001/clone-16084/us-central1/api
