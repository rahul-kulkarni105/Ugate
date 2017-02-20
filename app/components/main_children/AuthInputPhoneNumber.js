import React from "react";
import helpers from "./../utils/helpers.js";
//AuthInputPhoneNumber component
export default class AuthInputPhoneNumber extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      phoneNumber: "",
      logindetails: "",
    }
    this.setLogin = this.setLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  setLogin(login){
    this.setState({logindetails: login});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setLogin({phoneNumber: this.state.phoneNumber});
  }
  handleChange(event){
    this.setState({
      phoneNumber: event.target.value
    });
  }
  render(){
    return (
      <div className="panel panel-default padd">
        <div className="panel-heading"> Authenticate Phone Number</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="row">
              <p>Confirm activation of account with SMS authentication</p>
              <label className="col-md-2 control-label" htmlFor="phoneNumber">
              Phone Number: </label>
              <div className="col-md-9">
                <input type="tel" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
                <button className="btn btn-default" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}