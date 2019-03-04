import React from 'react';
import { Route } from 'react-router-dom';
import { checkAuth } from '../../api';
// export default ({ component: Component, isAuthenticated, ...rest }) => {
//     return (
//         <Route 
//             {...rest} 
//             render={props => 
//                     isAuthenticated 
//                     ? (<Component {...props}></Component>) 
//                     : <Redirect to={{ pathname: '/admin/login', state: {from: props.location} }}/>
//                 }
//             />
//     )
// }

export default class PrivateRoute extends React.Component {
    componentWillMount() {
        if (!this.isAuthenticated) {
            checkAuth().then((jsonObj) => {
                if (jsonObj.data) {
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