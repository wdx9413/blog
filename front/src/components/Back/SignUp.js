import React, {Component} from 'react';
import '../../styles/SignUp.scss';
import { testUser, checkAuth, register } from '../../api';
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
    componentWillMount() {
        // checkAuth().then((flag) => {
        //     if (flag) {
        //         console.log(flag);
        //         this.props.history.push('/admin');
        //     }
        // });
        
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
    
    async testUsername(event) {
        if (!(/^[A-Za-z]\w{4,}$/g).test(this.state.username)) {
            console.log('no');
            return;
        }
        let bool = await testUser(this.state.username)
        if (bool) {
            console.log('有人');
        } else {
            this.setState(Object.assign({}, this.state, {rightUsername: true}));
        }
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
            register(data)
            .then((d) => {
                console.log('success');
                this.props.history.push('/admin')
            })
            .catch(error => console.log(error));
        }
    }
}
export default SignUp;