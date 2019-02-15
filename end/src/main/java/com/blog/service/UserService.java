package com.blog.service;

import com.blog.entity.User;
import com.blog.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

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
}
