import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PrivateRoute from '../../components/Back/PrivateRoute';
import { login } from '../../store/actions';

const mapStateToProps = state => ({
    isAuthenticated: state.account.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    checkToLogin: () => dispatch(login())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));