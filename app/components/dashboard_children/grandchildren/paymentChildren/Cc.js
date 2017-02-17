import React from 'react'

export default class Cc extends React.Component {
    componentWillMount() {
        // Create an instance of the card Element
        var card = elements.create('card');

        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');

    },
    componentDidMount() {
        card.addEventListener('change', function(event) {
            var displayError = document.getElementById('payment-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
        });

    },
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
    },
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
    },
    render() {
        return (
            <form action="/charge" method="post" id="payment-form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <label>
                        <span>Card</span>
                        <div id="card-element">
                            <!-- a Stripe Element will be inserted here. -->
                        </div>
                    </label>
                </div>

                <!-- Used to display form errors -->
                <div id="payment-errors"></div>

                <input type="submit" className="submit" value="Submit Payment"/>
            </form>
          )
        }
      }
        
