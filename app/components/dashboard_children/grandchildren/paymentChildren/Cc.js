import React from 'react'
import {stripeCardSubmit} from '../../../utils/helpers'
console.log(stripeCardSubmit);
export default class Cc extends React.Component {


    componentDidMount() {
        var stripe = Stripe('pk_test_pdpXM9EGipPGJEg5bZDdtxpm');
        var elements = stripe.elements();

        // Create an instance of the card Element
        var card = elements.create('card');

        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');

        card.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });

        // Create a token or display an error the form is submitted.
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();


            stripe.createToken(card).then(function(result) {
                if (result.error) {
                    // Inform the user if there was an error
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                } else {
                    // Send the token to your server
                    var token = result.token;

                    const form = document.getElementById('payment-form');
                    const hiddenInput = document.createElement('input');
                    hiddenInput.setAttribute('type', 'hidden');
                    hiddenInput.setAttribute('name', 'stripeToken');
                    hiddenInput.setAttribute('value', token.id);
                    form.appendChild(hiddenInput);
                    stripeCardSubmit(token);
                }
            });
        });
    }

    render() {
        return (

            <form  id="payment-form">
                <div className="form-row">
                    <label htmlFor="card-element" className="text-success">
                        Credit or debit card
                    </label>
                    <div id="card-element"></div>

                    <div id="card-errors"></div>
                </div>

                <button className="btn btn-success">Add Patment Method</button>
            </form>
        );
    }
}
