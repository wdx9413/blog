package cn.blog.service.impl;

import cn.blog.entity.Message;
import cn.blog.entity.Visitor;
import cn.blog.mapper.MessageMapper;
import cn.blog.mapper.VisitorMapper;
import cn.blog.service.MessageService;
import cn.blog.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    MessageMapper messageMapper;
    @Autowired
    VisitorMapper visitorMapper;
    @Override
    public void insertMessage(Message message) {
        Visitor visitor = visitorMapper.getVisitorByEmail(message.getEmail());
        if (visitor == null || visitor.getId() == null) {
            if (visitor == null)  visitor = new Visitor();
            visitor.setId(UUID.get());
            visitor.setName(message.getVisitorName());
            visitor.setEmail(message.getEmail());
            visitorMapper.insertVisitor(visitor);
        }
        message.setVisitorId(visitor.getId());
        messageMapper.insert(message);
    }

    @Override
    public List<Message> getMessageList() {
        return messageMapper.queryAll();
    }
}
