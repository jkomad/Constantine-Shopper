import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
// import { deleteCartState } from "./cartSlice";
import { completeOrder } from "./cartSlice";

const CheckoutForm = ({ order, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(order)

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return isProcessing;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
    });

    if (error) {
      setMessage(error.message);
    }

    setIsProcessing(false);
    dispatch(completeOrder(id))
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <PaymentElement />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
