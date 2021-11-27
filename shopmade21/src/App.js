import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Content, MenuBar } from "./template"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <MenuBar />
        <Content />
      </Router>
    );
  }
}

export default App;