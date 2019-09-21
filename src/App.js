import React, { Component } from 'react';
import { Link, Paragraph } from 'evergreen-ui'
import logo from './img/logo.svg';
import './App.css';
import { Header } from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Paragraph size={500}>
            Edit <code>src/App.js</code> and save to reload.
          </Paragraph>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            size={500}
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
