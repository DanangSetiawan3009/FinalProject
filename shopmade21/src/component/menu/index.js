import React, { Component } from 'react'
import { Link } from "react-router-dom"


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Link to={this.props.target}>
                <div>
                    {this.props.children}
                </div>
            </Link>
        );
    }
}

export default index;