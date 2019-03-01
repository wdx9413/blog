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
@CrossOrigin(origins = {"http://localhost:3000", "null"})
public class ArticleController {

    @Autowired
    ArticleService articleService;

    @GetMapping("/articles")
    List<Article> getArticleList(Integer type) {
        switch (type) {
            case 0:
                return articleService.getArticleList();
            default:
                return articleService.getArticleListByType(type);
        }

    }

    @GetMapping("/article")
    Article getArticle(@RequestParam("id") String id) {
        System.out.println(articleService.getArticleById(id));
        return articleService.getArticleById(id);
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
        Map<String, String> map = Convert.jsonString2Map(data);
        String articleId = map.get("id");
        articleService.deleteArticleById(articleId);
    }
    @PostMapping("/article")
    void updateArticle(@RequestBody String data) {
        Map<String, Object> map = Convert.jsonString2Map(data);
        Article article = new Article();
        article.setId(map.get("id").toString());
        System.out.println(map.get("id"));
        article.setTitle(map.get("title").toString());
        article.setContent(map.get("content").toString());
        article.setType(Integer.parseInt(map.get("type").toString()));
        article.setDate(new Date());
        articleService.updateArticle(article);
    }
}
