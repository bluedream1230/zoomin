import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';

class CheckoutForm extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
    };

    render() {
        const { stripe } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        );
    }
}

const InjectedCheckoutForm = () => (
    <ElementsConsumer>{({ stripe, elements }) => <CheckoutForm stripe={stripe} elements={elements} />}</ElementsConsumer>
);

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export default StripePayment = () => (
    <Elements stripe={stripePromise}>
        <InjectedCheckoutForm />
    </Elements>
);
