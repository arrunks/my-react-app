import React, { Component } from 'react';
import './css/App.css';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation/>
          <div>
             {this.props.children}
          </div>
        </div>
    );
  }
}

export default App;
