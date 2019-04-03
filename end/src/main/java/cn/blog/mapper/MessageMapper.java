package cn.blog.mapper;

import cn.blog.entity.Message;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MessageMapper {

    @Insert("insert into message(id, visitor_id, content) values(#{id}, #{visitorId}, #{content})")
    void insert(Message message);
    @Select("select message.id, name as visitor_name, content, date from message left join visitor on message.visitor_id=visitor.id order by date desc")
    List<Message> queryAll();
}
