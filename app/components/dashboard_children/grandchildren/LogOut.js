import React from 'react'

export default class LogOut extends React.Component {
    //handleClick() {
        // api to set user signed in to false

    //}
    render() {
        return (
            <div className="row">
                <button type="button" class="btn btn-danger" /*onClick={this.handleClick}*/>
                    <Link to="/">Logout</Link>
                </button>
            </div>

        );
    }
}
