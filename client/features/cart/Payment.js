import React from "react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, selectCart } from "./cartSlice";
import { selectMe } from "../auth/authSlice";
import { fetchOrderHistory, selectOrderHistory } from "../orderHistory/orderHistorySlice";
import { useParams } from "react-router-dom";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const order = useSelector(selectOrderHistory)
  const user = useSelector(selectMe);
  const dispatch = useDispatch()
  const {id} = useParams()

  const cart = useSelector(selectCart);
  const { cartInfo } = cart;

  let total = cartInfo.total * 100

  useEffect(()=>{
    dispatch(fetchCart(user.id));
    dispatch(fetchOrderHistory(id));
  }, [])

  useEffect(() => {
    async function postPayment() {
      // if(total === NaN || total === null || !total) {
      //   console.log("processing...")
      // }
        await axios.post("/create-payment-intent", {
          amount: total,
        })
        .then((res) => {
          const { clientSecret } = res.data;
          setClientSecret(clientSecret);
        });
    }
    postPayment();
  }, []);

  useEffect(() => {
    fetch("/config").then(async (res) => {
      const { publishableKey } = await res.json();

      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm order={order} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
