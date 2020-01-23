import React from 'react';
import './App.css';

class App extends React.Component {

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
      <div className="App">
      </div>
    );
  }
}

export default App;
