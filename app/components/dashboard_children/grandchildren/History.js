//import react module
import React from 'react'
import moment from 'moment'
import {loadData} from './../../utils/helpers'

export default class History extends React.Component{
  constructor(props){
    super(props);

    this.state={
      dateTimestamp: Date.now()
    };
  }
  componentDidMount(){
    loadData().then(function(data){
        this.setState({history: data})
    }.bind(this));
  }
render(){


    const histDate = moment(this.state.dateTimestamp).toString();
    return(
    	<div className="panel panel-default">
    		<div className="panel-heading"> History</div>
    		<div className="panel-body">
    			<table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Activity</th>
                            <th>Amount Processed ($)</th>
                            <th>Balance ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{histDate}</td>
                            <td></td>
                            <td>-9000.01</td>
                            <td>50.00</td>
                        </tr>
                        <tr>
                            <td>{histDate}</td>
                            <td>Deposit?</td>
                            <td>20.00</td>
                            <td>70</td>
                        </tr>
                    </tbody>
                </table>
    		</div>
    	</div>
    );
  }




}
