import React, { Component } from 'react';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(c => 
            <li key={c.id}>{c.firstName} {c.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;