package cn.blog.mapper;

import cn.blog.entity.Article;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ArticleMapper {

    @Select("select id, title,date,type from article where state=1 order by date desc")
    List<Article> getArticleList();

    @Select("select id, title,date from article where state=1 and type=#{type} order by date desc")
    List<Article> getArticleListByType(Integer type);

    @Select("select id, title, date, content, type from article where id=#{id} and state=1  order by date desc")
    Article getArticleById(String id);

    @Insert("insert into article values(#{id}, #{title}, #{content}, #{type}, #{date}, #{state})")
    void insertArticle(Article article);

    @Update("update article set state=-1 where id=#{articleId}")
    void deleteArticleById(String articleId);

    @Update("update article set title=#{title}, content=#{content}, type=#{type}, date=#{date} where id=#{id}")
    void updateArticle(Article article);

}
