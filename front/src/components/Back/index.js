import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../../containers/back/Login';
import SignUp from './SignUp';
import Main from '../../containers/back/Main';
import PrivateRoute from '../../containers/back/PrivateRoute';
export default class Back extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/login' component={Login}></Route>
                <Route path='/admin/9413/signup' component={SignUp}></Route>
                <PrivateRoute path='/admin' component={Main}></PrivateRoute>
            </Switch>
        );
    }
}