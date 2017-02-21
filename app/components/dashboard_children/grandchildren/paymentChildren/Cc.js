import React from 'react'


export default class Cc extends React.Component {
    componentWillMount() {}
    componentDidMount() {
        const stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
        // Create an instance of the card Elemen
        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-element');
        // Add an instance of the card Element into the `card-element` <div>

        card.addEventListener('change', function(event) {
            var displayError = document.getElementById('payment-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
        });

    }
    stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
    }
    handleSubmit(event) {
        // Create a token or display an error the form is submitted.
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            stripe.createToken(card).then(function(result) {
                if (result.error) {
                    // Inform the user if there was an error
                    var errorElement = document.getElementById('payment-errors');
                    errorElement.textContent = result.error.message;
                } else {
                    // Send the token to your server
                    stripeTokenHandler(result.token);
                }
            });
        });
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (

            <form action="/charge" method="post" id="payment-form">
                <div className="form-row">
                    <label htmlFor="card-element" className="text-success">
                        Credit or debit card
                    </label>
                    <div id="card-element">

                    </div>


                    <div id="card-errors"></div>
                </div>

                <button className="btn btn-success">Submit Payment</button>
            </form>
          );
        }
      }
