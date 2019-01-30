package com.blog.service;

import com.blog.entity.User;
import com.blog.dao.UserMapper;
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

    public User testUserByName(String username) {
        return userMapper.queryUserByUsername(username);
    }
}
