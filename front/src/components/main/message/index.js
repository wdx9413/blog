import React, { Component } from 'react';
import  "../../../styles/Message.scss";
import defaultAvatar from '../../../assets/default-avatar.jpg'
import { insertMessage, getAllMessage } from '../../../api/Message';
class Message extends Component {
    state = {
        name: '',
        content: '',
        email: '',
        messageList: [

        ]
    }
    componentWillMount() {
        getAllMessage().then(messageList => {
            this.setState(Object.assign({}, this.state, {messageList}));
        });
    }
    render() {
        return (
            <div className='message' >
                <form className='content'>
                    <h3>留言</h3>
                    <hr/>
                    <strong>来说点什么吧...</strong>
                    <div className='input-item'>
                        <span>昵称：</span><input name='name' value={this.state.name} onChange={this.changeName.bind(this)}/>*
                    </div>
                    <div className='input-item'>
                        <span>邮箱：</span><input name='name' value={this.state.email} onChange={this.changeEmail.bind(this)}/>*
                    </div>
                    <div className='input-item'>
                        <div>留言内容：</div>
                        <textarea name='content' className='text' placeholder='最大100字' maxLength='200' alue={this.state.content} onChange={this.changeContent.bind(this)}/>
                    </div>
                    <button type='submit' onClick={this.newMessage.bind(this)}>提交</button>
                </form>
                <div className='message-list'>
                    {
                        this.state.messageList.map((message, index) => 
                            <div className='message-item' key={index}>
                                <img className='message-avatar' alt='头像' src={defaultAvatar} />
                                <h4 className='message-name'>{message.visitorName}</h4>
                                <span className='message-date'>{message.date.substring(0,16)}</span>
                                <p className='message-content'>{message.content}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
    async newMessage(e) {
        const {name, content, email} = this.state;
        if (content !== '' && name !== '' && email !== '' && /^[A-Za-z]\w{5,}@(\w+\.)+(\w+)$/.test(email)) {
            await insertMessage(name, content, email);
            window.reload();
        }
        if ( e && e.preventDefault ) e.preventDefault(); 
        else window.event.returnValue = false; 
    }
    changeName(e) {
        if (typeof e === 'undefined') {
            e = window.event;
        }
        this.setState(Object.assign({}, this.state, {name: e.target.value}))
    }
    changeContent(e) {
        if (typeof e === 'undefined') {
            e = window.event;
        }
        this.setState(Object.assign({}, this.state, {content: e.target.value}))
    }
    changeEmail(e) {
        if (typeof e === 'undefined') {
            e = window.event;
        }
        this.setState(Object.assign({}, this.state, {email: e.target.value}))
    }
}

export default Message;
