import React from 'react';
import { Route } from 'react-router-dom';
import { checkAuth } from '../../api';

export default class PrivateRoute extends React.Component {
    componentWillMount() {
        if (!this.isAuthenticated) {
            checkAuth().then((flag) => {
                if (flag) {
                    this.props.checkToLogin();
                } else {
                    this.props.history.push('/admin/login');
                }
            });
        }
    }
    render() {
        let { component: Component, isAuthenticated, ...rest} = this.props;
        return (
            <Route 
            {...rest} 
            render={props => (<Component {...props}></Component>) }
            />
        )
    }
}