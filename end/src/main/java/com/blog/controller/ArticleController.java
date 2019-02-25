package com.blog.controller;

import com.blog.entity.Article;
import com.blog.service.ArticleService;
import com.blog.util.Convert;
import com.blog.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class ArticleController {

    @Autowired
    ArticleService articleService;

    @GetMapping("/articles")
    List<Article> getArticleList() {
        return articleService.getArticleList();
    }

    @PutMapping("/article")
    void insertArticle(@RequestBody String data) {
        Map<String, Object> map = Convert.jsonString2Map(data);
        String userId = map.get("userId").toString();
        Article article = new Article();
        article.setId(UUID.get());
        article.setTitle(map.get("title").toString());
        article.setContent(map.get("content").toString());
        article.setType(Integer.parseInt(map.get("type").toString()));
        article.setState(1);
        article.setDate(new Date());
        articleService.insertArticleByUserId(userId, article);
    }
    @DeleteMapping("/article")
    void deleteArticle(@RequestBody String data) {
        
    }

    void updateArticle() {

    }
}
