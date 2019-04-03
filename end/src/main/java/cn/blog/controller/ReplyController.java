package cn.blog.controller;

import cn.blog.entity.Reply;
import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import cn.blog.service.ReplyService;
import cn.blog.util.UUID;
import cn.blog.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReplyController {
    @Autowired
    ReplyService replyService;
    @GetMapping("/reply")
    public Result getReplyList(String commentId) {
        return new Result(StatusCode.SUCCESS, replyService.getReplyListByCommentId(commentId));
    }

    @PutMapping("/reply")
    public Result insert(@RequestBody Reply reply) {
        reply.setId(UUID.get());
        reply.setVisitorEmail(reply.getVisitorEmail().trim());
        if (!Utils.testEmail(reply.getVisitorEmail())) {
            return new Result(StatusCode.ERROR, "");
        }
        replyService.insertReply(reply);
        return new Result(StatusCode.SUCCESS, "");
    }

    @DeleteMapping("/reply")
    public Result delete(@RequestBody String replyId) {
        replyService.deleteReply(replyId);
        return new Result(StatusCode.SUCCESS, "");
    }

}
