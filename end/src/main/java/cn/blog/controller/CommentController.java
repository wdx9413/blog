package cn.blog.controller;

import cn.blog.entity.Comment;
import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import cn.blog.service.CommentService;
import cn.blog.util.UUID;
import cn.blog.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommentController {
    @Autowired
    CommentService commentService;

    @GetMapping("/comments")
    public Result get(String articleId) {
        return new Result(StatusCode.SUCCESS, commentService.getCommentListByArticleId(articleId));
    }

    @GetMapping("/comments/recent")
    public Result getRecent() {
        return new Result(StatusCode.SUCCESS, commentService.getRecentCommentList());
    }

    @PutMapping("/comment")
    public Result put(@RequestBody Comment comment)  {
        comment.setId(UUID.get());
        comment.setVisitorEmail(comment.getVisitorEmail().trim());
        if (!Utils.testEmail(comment.getVisitorEmail())) {
            return new Result(StatusCode.ERROR, "");
        }
        commentService.insertComment(comment);
        return new Result(StatusCode.SUCCESS, "");
    }

    @DeleteMapping("/comment")
    public Result delete(@RequestBody String commentId) {
        commentService.deleteCommentById(commentId);
        return new Result(StatusCode.SUCCESS, "");
    }
}
