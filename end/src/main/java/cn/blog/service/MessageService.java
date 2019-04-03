package cn.blog.service;

import cn.blog.entity.Message;

import java.util.List;

public interface MessageService {
    void insertMessage(Message message);

    List<Message> getMessageList();
}
