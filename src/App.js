import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Social Productivity App</h1>
          <Navigation/>
        </header>
      </div>
    );
  }
}

export default App;