import React, { Component } from 'react';
import Main from "./containers/Main";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Main />
    );
  }
}
