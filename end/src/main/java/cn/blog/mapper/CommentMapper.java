package cn.blog.mapper;

import cn.blog.entity.Comment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {

    @Select(" SELECT c.id, content, article_id, name as visitor_name, date, visitor_id, reply_count from " +
            " (select id, content, article_id, visitor_id, date, reply_count from comment where article_id=#{articleId}) c " +
            " left join visitor on visitor.id=c.visitor_id order by date desc")
    List<Comment> getCommentListByArticleId(String articleId);

    @Insert("insert into comment(id, content, article_id, visitor_id) values(#{id}, #{content}, #{articleId}, #{visitorId})")
    void insertComment(Comment comment);

    @Delete("delete from comment where id=#{commentId}")
    void deleteCommentById(String commentId);

    @Update("update comment set reply_count=reply_count+1 where id=#{commentID}")
    void incReplyCountByID(String commentId);
    @Select("select name as visitor_name, content from comment left join visitor on visitor.id=comment.visitor_id order by date desc limit 0, 10")
    List<Comment> getRecentCommentList();
}
