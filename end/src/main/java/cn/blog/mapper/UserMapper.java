package cn.blog.mapper;

import cn.blog.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select id, username, phone from user")
    List<User> getUserList();

    @Select("select id, username, password, salt from user where username=#{username}")
    User findByName(String username);

    @Select("select id, username, phone, email, avatar from user where id=#{userId}")
    User getUserPrivateInfo(String userId);

    @Insert("insert into user(id, username, password, phone, salt) " +
            " values(#{id}, #{username}, #{password}, #{phone}, #{salt})")
    void insertUser(User user);

    @Select("select id, username, avatar from user where id=#{userId}")
    User getUserById(String userId);

}
