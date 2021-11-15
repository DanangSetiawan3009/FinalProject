import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Router from './Router';
import Store from './Redux/Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
