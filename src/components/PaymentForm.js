import React, { Component } from 'react';
import {injectStripe, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import { Form, Segment } from 'semantic-ui-react';

class PaymentForm extends Component {

  state = {
    cardNumber: false,
    cardExpiry: false,
    cvc: false
  }

   stripeElementChange = (element, name) => {
    if (!element.empty && element.complete) {
      this.setState({ [name]: true });
    } else {
      this.setState({ [name]: false });
    }

    const { cardNumber, cardExpiry, cvc} = this.state;

    if (cardNumber && cardExpiry && cvc) {
      this.props.formStatus(true);
    } else {
      this.props.formStatus(false);
    }
  }

  render() {

    const createOptions = (fontSize, padding) => {
      return {
        style: {
          base: {
            fontSize,
            color: '#424770',
            letterSpacing: '0.025em',
            '::placeholder': {
              color: '#aab7c4',
            },
            padding,
          },
          invalid: {
            color: '#9e2146',
          },
        },
      };
    };

    return (
      <div>
        <Segment>
          <Form>
            <label>
              Card number
              <CardNumberElement
                {...createOptions(this.props.fontSize)}
                options={{creditCard: true}}
                onChange={(element) => this.stripeElementChange(element, 'cardNumber')}
              />
            </label>
            <label>
              Expiration date
              <CardExpiryElement
                {...createOptions(this.props.fontSize)}
                onChange={(element) => this.stripeElementChange(element, 'cardExpiry')}
              />
            </label>
            <label>
              CVC
              <CardCVCElement
                {...createOptions(this.props.fontSize)}
                onChange={(element) => this.stripeElementChange(element, 'cvc')}
              />
            </label>
          </Form>
        </Segment>
    </div>
    );
  }
}

export default injectStripe(PaymentForm);
