import React from 'react'
import {Link} from 'react-router'

export default class SideNav extends React.Component {
    render() {
        return (



          <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                       uGate
                    </a>
                </li>
                {/* logo goes here */}
                <li><Link to="/AddPaymentMethod">AddPaymentMethod</Link></li>
                <li><Link to="/Deposit">Deposit</Link></li>
                <li><Link to="/History">History</Link></li>
                <li><Link to="/SendToRipple">SendToRipple</Link></li>
                <li><Link to="/Upload">Upload</Link></li>
                <li><Link to="/Withdraw">Withdraw</Link></li>
                <li><Link to="/LogOut">LogOut</Link></li>
              </ul>
            </div>



        );
    }
}
