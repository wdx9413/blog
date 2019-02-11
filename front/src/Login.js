import React, {Component} from 'react';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.testUsername = this.testUsername.bind(this);
        this.sign_in = this.sign_in.bind(this);
        this.sign_up = this.sign_up.bind(this);
        this.forgot = this.forgot.bind(this);
        this.state = {
            username: '',
            password: ''
        };
    }
    
    changeUsername(event) {
        this.setState({
            username: event.target.value,
            password: this.state.password
        });
    }
    changePassword(event) {
        this.setState({
            username: this.state.username,
            password: event.target.value
        });
    }
    render() {
        return (
            <div className='login-page'>
                <form className='login-form'>
                    <h3 className='sign-title'>Sign in</h3>
                    <input className='input' value={this.state.username} placeholder='Username' onChange={this.changeUsername} onBlur={this.testUsername}/>
                    <input className='input' type='password' value={this.state.password} placeholder='Password' onChange={this.changePassword} />
                    <div className='sign-in' onClick={this.sign_in}>SIGN IN</div>
                    <div className='other'>
                        <span className='sign-up'  onClick={this.sign_up}>Sign up</span>
                        <span className='forgot'  onClick={this.forgot}>Forgot Password</span>
                    </div>
                </form>
            </div>
        );
    }
    testUsername() {
        // fetch(
        //     'http://localhost:8080/testUsername', 
        //     {
        //         method: 'POST',
        //         body: this.state.username
        //     }
        // )
        // .then(response => { return response.json(); })
        // .then((bool) => {
        //     if (bool) {
        //         console.log('有这个人');
        //     } else {
        //         console.log('无此人');
        //     }
        // })
        // .catch(error => console.log(error));
        
    }
    sign_in() {
        // var data = `${this.state.username},${this.state.password}`;
        var data = {};
        data.username = this.state.username;
        data.password = this.state.password;
        data.remember = false;
        fetch(
            'http://localhost:8080/admin/login', 
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log(e));
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