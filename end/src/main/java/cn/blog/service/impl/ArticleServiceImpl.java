package cn.blog.service.impl;

import cn.blog.entity.Article;
import cn.blog.mapper.UserArticleMapper;
import cn.blog.mapper.ArticleMapper;
import cn.blog.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@CacheConfig(cacheNames = "article")
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    UserArticleMapper userArticleMapper;


    public List<Article> getArticleList() {
        return articleMapper.getArticleList();
    }

    @Transactional
    @CacheEvict(key = "#article.id")
    public void insertArticleByUserId(String userId, Article article) {
        articleMapper.insertArticle(article);
//        userArticleMapper.insert(userId, article.getId());

    }
    @Cacheable(key = "#id")
    public Article getArticleById(String id) {
        Article article = articleMapper.getArticleById(id);
        return article;
    }

    @CacheEvict(key = "#articleId")
    public void deleteArticleById(String articleId) {
        articleMapper.deleteArticleById(articleId);
    }

    @CacheEvict(key = "#article.id")
    public void updateArticle(Article article) {
        articleMapper.updateArticle(article);
    }


    public List<Article> getArticleListByType(Integer type) {
        return articleMapper.getArticleListByType(type);
    }
}
