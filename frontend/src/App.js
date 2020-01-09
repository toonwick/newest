import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Customers from './components/customers';
import Products from './components/products';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:5000/api")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p>{this.state.apiResponse}</p>
          <Customers />
          <Products />
        </div>
      </Provider>
    );
  }
}

export default App;
