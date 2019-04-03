package cn.blog.service;

import cn.blog.entity.Reply;

import java.util.List;

public interface ReplyService {
    List<Reply> getReplyListByCommentId(String commentId);

    void insertReply(Reply reply);

    void deleteReply(String replyId);
}
