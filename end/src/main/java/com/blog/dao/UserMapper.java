package com.blog.dao;

import com.blog.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select id, username, phone from user")
    List<User> getUserList();
    @Select("select id, username, phone from user where username=#{username}")
    User queryUserByUsername(String username);
}
