import React, { Component } from 'react';
import '../styles/App.scss';
import Home from '../containers/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Back from './back';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path='/admin' component={Back}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;