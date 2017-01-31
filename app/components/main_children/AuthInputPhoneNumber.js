// Include React
var React = require("react");
var helpers = require("./utils/helpers.js");
//AuthInputPhoneNumber component
var AuthInputPhoneNumber = React.createClass({
  getInitialState: function(){
    return {
      phonenumber: "",
      logindetails: "",
    };
  },
  setLogin: function(login){
    this.setState({logindetails: login});
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.setLogin({phonenumber: this.state.phonenumber});
  },
  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  // Here we render the component
  render: function() {
    return (
        <div className="jumbotron">
          <h1 className="text-center">Welcome to uGate!</h1>
          <h2 className="text-center">Connecting you across the globe</h2>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputPhone">Input Phone Number:</label>
              <input type="text" className="form-control" id="inputPhone" value={this.state.phonenumber} onChange={this.handleChange} required placeholder="xxx xxx xxxx"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AuthInputPhoneNumber;
