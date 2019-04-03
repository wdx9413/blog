package cn.blog.service.impl;

import cn.blog.entity.Reply;
import cn.blog.entity.Visitor;
import cn.blog.mapper.CommentMapper;
import cn.blog.mapper.ReplyMapper;
import cn.blog.mapper.VisitorMapper;
import cn.blog.service.ReplyService;
import cn.blog.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReplyServiceImpl implements ReplyService {
    @Autowired
    ReplyMapper replyMapper;
    @Autowired
    VisitorMapper visitorMapper;
    @Autowired
    CommentMapper commentMapper;

    public List<Reply> getReplyListByCommentId(String commentId) {
        return replyMapper.getReplyListByCommentId(commentId);
    }
    @Transactional
    public void insertReply(Reply reply) {
        // 如果visitor不存在则创建这个人
        Visitor visitor = visitorMapper.getVisitorByEmail(reply.getVisitorEmail());
        if (visitor == null || visitor.getId() == null) {
            if (visitor == null)  visitor = new Visitor();
            visitor.setId(UUID.get());
            visitor.setName(reply.getVisitorName());
            visitor.setEmail(reply.getVisitorEmail());
            visitorMapper.insertVisitor(visitor);
        }
        reply.setVisitorId(visitor.getId());
        commentMapper.incReplyCountByID(reply.getCommentId());
        replyMapper.insertReply(reply);
    }

    public void deleteReply(String replyId) {
        replyMapper.deleteReply(replyId);
    }
}
