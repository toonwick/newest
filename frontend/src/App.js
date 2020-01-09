import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Customers from './components/customers';
import Products from './components/products';
import Employees from  './components/employees';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      employees: [],
      isEditForm: false,
      employee: {
        firstName: "",
        lastName: "",
        salary: "",
        job: ""
      },
      message: ""
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  componentDidMount() {
    Employees.getEmployees().then(data => {
      console.log(data);
      this.setState({ employees: data.response })
    });
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
