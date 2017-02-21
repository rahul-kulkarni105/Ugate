import React from 'react'
import SideNav from './dashboard_children/SideNav'

export default class Dashboard extends React.Component {
  componentDidMount(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
  }
    render() {

        return (
            <div id="wrapper">

                <SideNav/>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {this.props.children}
                                <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
