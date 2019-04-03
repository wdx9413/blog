package cn.blog.service;

import cn.blog.entity.Article;

import java.util.List;

public interface ArticleService {
    List<Article> getArticleList();

    List<Article> getArticleListByType(Integer type);

    Article getArticleById(String id);

    void insertArticleByUserId(String userId, Article article);

    void deleteArticleById(String articleId);

    void updateArticle(Article article);
}
