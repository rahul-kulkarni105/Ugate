import React from 'react'

export default class Cc extends React.Component {
  componentWillMount(){
    // Create an instance of the card Element
    var card = elements.create('card');

    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');

  }.
    render() {
        return (
          <form action="/charge" method="post" id="payment-form">
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

<input type="submit" className="submit" value="Submit Payment" />
</form>
        );
    }
}
