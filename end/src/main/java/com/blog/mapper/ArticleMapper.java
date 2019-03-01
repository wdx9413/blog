package com.blog.mapper;

import com.blog.entity.Article;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ArticleMapper {

    @Select("select id, title,date from article where state=1")
    List<Article> getArticleList();

    @Select("select id, title,date from article where state=1 and type=#{type}")
    List<Article> getArticleListByType(Integer type);

    @Insert("insert into article values(#{id}, #{title}, #{content}, #{type}, #{date}, #{state})")
    void insertArticle(Article article);

    @Select("select id, title, date, content, type from article where id=#{id} and state=1")
    Article getArticleById(String id);

    @Update("update article set state=-1 where id=#{articleId}")
    void deleteArticleById(String articleId);

    @Update("update article set title=#{title}, content=#{content}, type=#{type}, date=#{date} where id=#{id}")
    void updateArticle(Article article);

}
