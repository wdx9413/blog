import React, {Component} from 'react';
import './Login.css';
class Login extends Component {
    render() {
        return (
            <div className='login-page'>
                <form className='login-form'>
                    <h3 className='sign-title'>Sign in</h3>
                    <input className='input' placeholder='Username'/>
                    <input className='input' placeholder='Password'/>
                    <div className='sign-in' onClick={this.sign_in}>SIGN IN</div>
                    <div className='other'>
                        <span className='sign-up'  onClick={this.sign_up}>Sign up</span>
                        <span className='forgot'  onClick={this.forgot}>Forgot Password</span>
                    </div>
                </form>
            </div>
        );
    }
    sign_in() {
        fetch(
            'localhost:8080', 
            {
                method: 'POST'
            }
        ).then((response) => {
            console.log(response);
        });
        console.log('sign_in');
    }
    sign_up() {
        console.log('sign_up');
    }
    forgot() {
        console.log('forgot');
    }
}
export default Login;