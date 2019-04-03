package cn.blog.mapper;

import cn.blog.entity.Reply;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ReplyMapper {

    @Select("select r.id, content, comment_id, visitor_name, visitor_id, visitor.name as target_visitor_name, date from " +
            "(select r.id, content, comment_id, visitor_id, name as visitor_name, target_visitor_id, date from " +
            "(select id, content, comment_id, visitor_id, target_visitor_id, date from reply WHERE comment_id=#{commentId}) r " +
            "left join visitor on visitor_id=visitor.id) r " +
            "left join visitor on visitor.id=r.target_visitor_id " +
            " order by date desc")
    List<Reply> getReplyListByCommentId(String commentId);

    @Insert("insert into reply(id, content, comment_id, visitor_id, target_visitor_id) " +
            " values(#{id}, #{content}, #{commentId}, #{visitorId}, #{targetVisitorId})")
    void insertReply(Reply reply);

    @Delete("delete from reply where id=#{replyId}")
    void deleteReply(String replyId);
}
