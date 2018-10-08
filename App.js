/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './app/Home';
import {Provider} from 'react-redux';
import store from './app/Store';

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

