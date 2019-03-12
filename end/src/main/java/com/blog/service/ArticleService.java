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
//        userArticleMapper.insert(userId, article.getId());
    }

    public Article getArticleById(String id) {
        return articleMapper.getArticleById(id);
    }

    public void deleteArticleById(String articleId) {
        articleMapper.deleteArticleById(articleId);
    }

    public void updateArticle(Article article) {
        articleMapper.updateArticle(article);
    }

    public List<Article> getArticleListByType(Integer type) {
        return articleMapper.getArticleListByType(type);
    }
}
