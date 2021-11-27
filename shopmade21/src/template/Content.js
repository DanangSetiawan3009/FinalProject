import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import { Home, Jual, List, Login, Cart, Edit } from "../pages"
import "./content.css"


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/jual" children={<Jual />} />
                <Route path="/edit" children={<Edit />} />
                <Route path="/list" children={<List />} />
                <Route path="/login" children={props => <Login {...props} />} />
                <Route path="/cart" children={<Cart />} />
            </Switch>
        );
    }
}

export default Content;