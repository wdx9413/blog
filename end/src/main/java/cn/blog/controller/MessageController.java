package cn.blog.controller;

import cn.blog.entity.Message;
import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import cn.blog.service.MessageService;
import cn.blog.util.UUID;
import cn.blog.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @Autowired
    MessageService messageService;

    @GetMapping("/messages")
    Result getMessages() {
        return new Result(StatusCode.SUCCESS, messageService.getMessageList());
    }

    @PutMapping("/message")
    Result insert(@RequestBody Message message) {
        message.setId(UUID.get());
        message.setEmail(message.getEmail().trim());
        if (!Utils.testEmail(message.getEmail())) {
            return new Result(StatusCode.ERROR, "");
        }
        messageService.insertMessage(message);
        return new Result(StatusCode.SUCCESS, "");
    }
}
