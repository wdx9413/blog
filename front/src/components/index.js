import React, { Component } from 'react';
import '../styles/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import CustomLoading from './common/CustomLoading';
const Home = Loadable({loader: () => import('../containers/Main'), loading: CustomLoading});
const Back = Loadable({loader: () => import('./back'), loading: CustomLoading})
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