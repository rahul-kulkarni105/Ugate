import React from 'react'
import AddPaymentMethod from './grandchildren/AddPaymentMethod'
import Deposit from './grandchildren/Deposit'
import History from './grandchildren/History'
import LogOut from './grandchildren/LogOut'
import SendToRipple from './grandchildren/SendToRipple'
import Upload from './grandchildren/Upload'
import Withdraw from './grandchildren/Withdraw'


export default class SideNav extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="row">
          {/* logo goes here */}
          <AddPaymentMethod />
          <Deposit />
          <History />
          <LogOut />
          <SendToRipple />
          <Upload />
          <Withdraw />
        </div>
      </div>

    );
  }
}
