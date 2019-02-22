import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
