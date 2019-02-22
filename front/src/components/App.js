import React, { Component } from 'react';
import '../styles/App.scss';
import Head from './Head';
import Home from './Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head></Head>
        <Home></Home>
      </div>
    );
  }
}

export default App;
