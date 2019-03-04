import {connect} from 'react-redux';
import Login from '../../components/Back/Login';
import { login } from '../../store/actions';

const mapStateToProps = state => ({
    isAuthenticated: state.account.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(login())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);