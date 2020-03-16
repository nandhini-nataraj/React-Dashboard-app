import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }
  render() {
    return (
      <div
        style={{
          width: '400px',
          height: '300px'
        }}>
        Hi there!
      </div>
    );
  }
}
export default App;
