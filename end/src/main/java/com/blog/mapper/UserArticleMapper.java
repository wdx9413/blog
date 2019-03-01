package com.blog.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserArticleMapper {

    @Insert("insert into user_article values(#{userId}, #{articleId})")
    void insert(@Param("userId") String userId, @Param("articleId") String articleId);

}
