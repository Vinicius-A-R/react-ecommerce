import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import PUBLISH_KEY from '../STRIPE_KEY';

import { Container } from './styles';

function Button({ price }) {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <Container>
      <StripeCheckout
        label="Pay Now"
        name="E-commerce Clothes Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={PUBLISH_KEY}
      />
    </Container>
  );
}

export default Button;
