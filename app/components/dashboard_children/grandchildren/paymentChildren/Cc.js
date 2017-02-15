import React from 'react'

export default class Cc extends React.Component {
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
