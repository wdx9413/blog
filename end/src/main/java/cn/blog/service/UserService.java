package cn.blog.service;

import cn.blog.entity.User;

public interface UserService {
    User findByName(String username);

    void insertUser(User user);

    User getUserPrivateInfo(String userId);
}
