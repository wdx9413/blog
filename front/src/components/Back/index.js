import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../../containers/Back/Login';
import SignUp from './SignUp';
import Main from '../../containers/Main';
import PrivateRoute from '../../containers/Back/PrivateRoute';
export default class Back extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/admin/login' component={Login}></Route>
                {/* <PrivateRoute path='/admin/signup' component={SignUp}></PrivateRoute> */}
                <Route path='/admin/signup' component={SignUp}></Route>
                <PrivateRoute path='/admin' component={Main}></PrivateRoute>
            </Switch>
        );
    }
}