import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Main from '../../containers/Main';
export default class Back extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/login' component={Login}></Route>
                <Route path='/admin/signup' component={SignUp}></Route>
                <Route path='/admin' component={Main}></Route>
            </Switch>
        );
    }
}