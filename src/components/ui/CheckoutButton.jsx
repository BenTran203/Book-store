// CheckoutButton.js
import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const CheckoutButton = ({ cart }) => {
  const stripe = useStripe();

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: cart,
        }),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn__checkout">
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
