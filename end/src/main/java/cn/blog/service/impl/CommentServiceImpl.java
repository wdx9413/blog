package cn.blog.service.impl;

import cn.blog.entity.Comment;
import cn.blog.entity.Visitor;
import cn.blog.mapper.CommentMapper;
import cn.blog.mapper.VisitorMapper;
import cn.blog.service.CommentService;
import cn.blog.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentMapper commentMapper;
    @Autowired
    VisitorMapper visitorMapper;

    public List<Comment> getCommentListByArticleId(String articleId) {
        return commentMapper.getCommentListByArticleId(articleId);
    }

    @Transactional
    public void insertComment(Comment comment) {
        // 如果visitor不存在则创建这个人
        Visitor visitor = visitorMapper.getVisitorByEmail(comment.getVisitorEmail());
        if (visitor == null || visitor.getId() == null) {
            if (visitor == null)  visitor = new Visitor();
            visitor.setId(UUID.get());
            visitor.setName(comment.getVisitorName());
            visitor.setEmail(comment.getVisitorEmail());
            visitorMapper.insertVisitor(visitor);
        }
        comment.setVisitorId(visitor.getId());
        commentMapper.insertComment(comment);
    }

    public void deleteCommentById(String commentId) {
        commentMapper.deleteCommentById(commentId);
    }

    @Override
    public List<Comment> getRecentCommentList() {
        return commentMapper.getRecentCommentList();
    }
}
