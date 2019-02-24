import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
export default class Back extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/login' component={Login}></Route>
                <Route path='/admin/signup' component={SignUp}></Route>
            </Switch>
        );
    }
}