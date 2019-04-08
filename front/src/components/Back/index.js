import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Loadable from "react-loadable";
import CustomLoading from '../common/CustomLoading'

const Login = Loadable({loader: () => import('../../containers/back/Login'), loading: CustomLoading})
const SignUp = Loadable({loader: () => import('./SignUp'), loading: CustomLoading})
const Main = Loadable({loader: () => import('../../containers/back/Main'), loading: CustomLoading})
const PrivateRoute = Loadable({loader: () => import('../../containers/back/PrivateRoute'), loading: CustomLoading})

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