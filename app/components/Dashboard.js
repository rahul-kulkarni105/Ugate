import React from 'react'
import SideNav from './dashboard_children/SideNav'


export default class Dashboard extends React.component{
  render(){
const DashboardStyle = {

}

    return(
      <div className="Row">
        <div className="col-xs-4">
            <SideNav />
        </div>
      <div className="col-xs-8" id="">
        {this.props.children}
      </div>

      </div>

    );
  }
}
