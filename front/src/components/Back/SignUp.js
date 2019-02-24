import React, {Component} from 'react';
import '../../styles/SignUp.scss';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // phone: '',
            // verify: '',
            rightUsername: false
        };
        this.testUsername = this.testUsername.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        // this.changePhone = this.changePhone.bind(this);
        // this.changeVerify = this.changeVerify.bind(this);
        // this.getVerify = this.getVerify.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    render() {
        return (
            <div className='sign-up-page'>
                <div className='sign-up-form'>
                    <h3 className='sign-up-title'>Sign Up</h3>
                    <div>
                        <div className="sign-up-line">  
                            <span className='word'>username:</span>
                            <input className='sign-up-input' onChange={this.changeUsername} type='text' onBlur={this.testUsername}/>
                        </div>
                        <div className="sign-up-line">
                            <span className='word'>password:</span>
                            <input className='sign-up-input' onChange={this.changePassword} type='password'/>
                        </div>
                        {/* <div className="sign-up-line">
                            <span className='word'>phone:</span>
                            <input className='sign-up-input' onChange={this.changePhone} type='text'/>
                        </div>
                        <div className="sign-up-line">
                            <span className='word'>verify:</span>
                            <input className='sign-up-input verify-input' onChange={this.changeVerify}  type='text'/>
                            <span className='word-get' onClick={this.getVerify}>GET</span>
                        </div> */}
                        <div className="sign-up-send" onClick={this.submitData}>submit</div>
                    </div>
                </div>
            </div>
        )
    }
    
    testUsername(event) {
        if (!(/^[A-Za-z]\w{5,}$/g).test(this.state.username)) {
            console.log('no');
            return;
        }
        fetch(
            'http://localhost:8080/testUser', 
            {
                method: 'POST',
                body: this.state.username
            }
        )
        .then(response => { return response.json(); })
        .then((bool) => {
            if (bool) {
                console.log('有人');
            } else {
                this.setState(
                    Object.assign({}, this.state, {rightUsername: true})
                    );
            }
        })
        .catch(error => console.log(error));
    }
    changeUsername(event) {
        this.setState(
            Object.assign({}, this.state, {username: event.target.value})
            );
    }
    changePassword(event) {
        this.setState(
            Object.assign({}, this.state, {password: event.target.value})
            );
    }
    // changePhone(event) {
    //     this.setState(
    //         Object.assign({}, this.state, {phone: event.target.value})
    //         );
    // }
    // changeVerify(event) {
    //     this.setState(
    //         Object.assign({}, this.state, {verify: event.target.value})
    //         );
    // }
    // getVerify() {

    // }
    submitData() {
        if (this.state.rightUsername) {
            var data = {username: this.state.username, password: this.state.password};
            fetch(
                'http://localhost:8080/register', 
                {
                    method: 'PUT',
                    body: JSON.stringify(data)
                }
            )
            .then((response) => {
                console.log('success')
            })
            .catch(error => console.log(error));
        }
    }
}
export default SignUp;