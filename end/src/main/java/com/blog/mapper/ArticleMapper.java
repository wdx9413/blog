package com.blog.mapper;

import com.blog.entity.Article;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ArticleMapper {

    @Select("select * from article")
    List<Article> getArticleList();
    @Insert("insert into article values(#{id}, #{title}, #{content}, #{type}, #{date}, #{state})")
    void insertArticle(Article article);
}
