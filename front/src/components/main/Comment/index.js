import React from 'react';
import '../../../styles/Comment.scss'
import CommentItem from './CommentItem';
import { insertComment, getCommentsByArticleIdAsync, getReplysByCommentIdAsync } from '../../../api/Comment';
import { insertReply } from '../../../api/Reply';
class Comment extends React.Component {
    state = {
        hasComment: true,
        comments: [
        ],
        hidden: true
    }
    componentWillMount() {
        getCommentsByArticleIdAsync(this.props.articleId)
            .then((data) => {
                this.setState(Object.assign({}, this.state, {comments: data}))
            })
                
    }
    
    componentWillUnmount() {
        this.setState = () => {
            return;
        }
    }
    render() {
        if (this.state.hasComment > 0) {
            return (
                <div className='comment' >
                    <div className='comment-input'>
                        <input id='comment-input-none-ct' className='notVisible' placeholder='commentId,targetVisitorId'/>
                        <textarea id='comment-input-content' placeholder='评论'/><br/>
                        <div className={this.state.hidden ? 'notVisible' : ''} id='comment-cancel-btn' onClick={this.changeCommentType.bind(this)}>取消回复</div>
                        昵称：<input id='comment-input-name' placeholder='必填'/><br/>
                        邮箱：<input id='comment-input-email' placeholder='必填'/><br/>
                        <div className='comment-input-btn' onClick={this.submitComment.bind(this)}>发表</div>
                    </div>
                    <div className='comment-list'>
                        {
                            this.state.comments.map((item, index) =>
                                <div key={index} className='comment-item'>
                                    <CommentItem comment={{ id: item.id, content: item.content, visitorAvatar: item.visitorAvatar, visitorId: '', visitorName: item.visitorName, date: item.date, changeCommentType: this.changeCommentType.bind(this) }}></CommentItem>
                                    {
                                        item.replyCount > 0 ?
                                            item.showReply ? <div>
                                                {
                                                    item.reply && item.reply.map((r, index) =>
                                                        <CommentItem key={index} marginLeft='50px' comment={{...r, id: item.id, changeCommentType: this.changeCommentType.bind(this) }}></CommentItem>
                                                    )
                                                }
                                                <span onClick={this.toggleShowReply.bind(this, item.id, false)}>收起</span>
                                            </div>
                                                : <span onClick={this.toggleShowReply.bind(this, item.id, true)}>查看回复({item.replyCount})</span>
                                            : null
                                    }
                                </div>
                            )}
                    </div>
                </div>
            );
        }
        return (<div></div>)
    }
    async toggleShowReply(id, bool) {
        let reply = null;
        if (bool) {
            reply = await getReplysByCommentIdAsync(id);
        }
        return this.setState(Object.assign({}, this.state, {
            comments: this.state.comments.map((comment) => {
                if (comment.id === id) {
                    comment.showReply = bool;
                    comment.reply = reply;
                    console.log(reply)
                }
                return comment;
            })
        }));
    }
    changeCommentType(commentId, targetVisitorId) {
        let input = document.getElementById('comment-input-none-ct');
        document.getElementById('comment-input-content').value = '';
        document.getElementById('comment-input-name').value = '';
        document.getElementById('comment-input-email').value = '';
        if (commentId != null && commentId !== '' && targetVisitorId != null) {
            input.value = `${commentId},${targetVisitorId}`;
            console.log(commentId, targetVisitorId)
            this.setState(Object.assign({}, this.state, {hidden: false}));
            document.getElementById('comment-input-content').placeholder = '回复';
        } else {
            input.value = '';
            this.setState(Object.assign({}, this.state, {hidden: true}));
            document.getElementById('comment-input-content').placeholder = '评论';
        }
    }
    async submitComment() {
        let input = document.getElementById('comment-input-none-ct');
        let content = document.getElementById('comment-input-content').value.trim();
        let name = document.getElementById('comment-input-name').value.trim();
        let email = document.getElementById('comment-input-email').value.trim();
        if (content !== '' && name !== '' && email !== '' && /^[A-Za-z]\w{5,}@(\w+\.)+(\w+)$/.test(email)) {
            let success = false;
            if (this.state.hidden) {
                success = await insertComment(content, name, email, this.props.articleId);
            } else {
                let [commentId, targetVisitorId] = input.value.split(',');
                success = await insertReply(content, name, email, commentId, targetVisitorId);
            }
            if (success) {
                window.location.reload();
            }
        } 
    }
}
export default Comment;