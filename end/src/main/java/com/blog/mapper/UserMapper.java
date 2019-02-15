package com.blog.mapper;

import com.blog.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select id, username, phone from user")
    List<User> getUserList();

    @Select("select * from user where username=#{username}")
    User findByName(String username);

    @Select("select id, username, phone from user where username=#{username} and password=#{password}")
    User queryUserByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    @Insert("insert into user(id, username, password, phone, salt) " +
            " values(#{id}, #{username}, #{password}, #{phone}, #{salt})")
    void insertUser(User user);
}
