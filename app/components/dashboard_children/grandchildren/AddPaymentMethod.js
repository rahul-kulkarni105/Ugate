//import react module
import React from 'react'
import Cc from './paymentChildren/Cc'
export default class AddPaymentMethod extends React.Component{
  render(){
    return(
      <div className="row">
      	<div className="panel panel-default">
    		<div className="panel-heading"> Add Payment Method</div>
    		<div className="panel-body">
            <Cc />
    		</div>
    	</div>
      </div>

    );
  }
}
