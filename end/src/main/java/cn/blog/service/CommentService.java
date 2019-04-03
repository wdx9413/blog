package cn.blog.service;

import cn.blog.entity.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getCommentListByArticleId(String articleId);

    void insertComment(Comment comment);

    void deleteCommentById(String commentId);

    List<Comment> getRecentCommentList();
}
