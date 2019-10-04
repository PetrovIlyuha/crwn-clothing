import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_QWGBXWi4T0bVDJzvMdKPGaeH00XQJ1w5UC';

  const onToken = token => {
    console.log(token);
    alert('Payment Success!');
  }

  return (
    <StripeCheckout
    label='Pay Now'
    name='GetNasty Clothing LLC.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/FLE.svg?size=20x20'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;