package com.blog.service;

import com.blog.entity.Article;
import com.blog.mapper.ArticleMapper;
import com.blog.mapper.UserArticleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    UserArticleMapper userArticleMapper;

    public List<Article> getArticleList() {
        return articleMapper.getArticleList();
    }

    @Transactional
    public void insertArticleByUserId(String userId, Article article) {
        articleMapper.insertArticle(article);
        userArticleMapper.insert(userId, article.getId(), article.getState());
    }
}
