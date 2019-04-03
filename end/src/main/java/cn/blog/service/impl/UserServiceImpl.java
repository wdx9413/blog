package cn.blog.service.impl;

import cn.blog.entity.User;
import cn.blog.mapper.UserMapper;
import cn.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    public List<User> getUserList() {
        return userMapper.getUserList();
    }

    public User findByName(String username) {
        return userMapper.findByName(username);
    }

    public void insertUser(User user) {
        userMapper.insertUser(user);
    }

    public User getUserById(String userId) {
        return userMapper.getUserById(userId);
    }

    public User getUserPrivateInfo(String userId) {
        return userMapper.getUserPrivateInfo(userId);
    }
}
