import React from 'react';
import defaultAvatar from '../../../assets/default-avatar.jpg'
class CommentItem extends React.Component{
    render() {
        return (
            <div className='comment-content' style={{marginLeft:this.props.marginLeft}}>
                <span className='comment-content-id'>{this.props.comment.visitorId}</span>
                <img className='comment-content-avatar' alt='头像' src={this.props.comment.avatar ? this.props.comment.avatar : defaultAvatar}/>
                <span className='comment-content-name'>{this.props.comment.visitorName}:</span>
                <p className='comment-content-p'>
                    {this.props.comment.targetVisitorName ? '回复' + this.props.comment.targetVisitorName +' :  ' : null}
                    {this.props.comment.content}</p>
                <span className='comment-content-date'>{this.props.comment.date}</span>
                <span className='comment-content-reply' onClick={() => this.props.comment.changeCommentType(this.props.comment.id, this.props.comment.visitorId)}>回复</span>
            </div>
        )
    }
}
export default CommentItem;