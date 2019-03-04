package com.blog.controller;

import com.blog.entity.Article;
import com.blog.service.ArticleService;
import com.blog.util.Convert;
import com.blog.util.UUID;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class ArticleController {

    @Autowired
    ArticleService articleService;

    @GetMapping("/articles")
    List<Article> getArticleList(Integer type, HttpServletRequest request) {
        switch (type) {
            case 0:
                return articleService.getArticleList();
            default:
                return articleService.getArticleListByType(type);
        }
    }

    @GetMapping("/article")
    Article getArticle(@RequestParam("id") String id) {
        return articleService.getArticleById(id);
    }
    @PutMapping("/article")
    @RequiresAuthentication
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
    @RequiresAuthentication
    void deleteArticle(@RequestBody String data) {
        Map<String, String> map = Convert.jsonString2Map(data);
        String articleId = map.get("id");
        articleService.deleteArticleById(articleId);
    }
    @PostMapping("/article")
    @RequiresAuthentication
    void updateArticle(@RequestBody String data) {
        Map<String, Object> map = Convert.jsonString2Map(data);
        Article article = new Article();
        article.setId(map.get("id").toString());
        article.setTitle(map.get("title").toString());
        article.setContent(map.get("content").toString());
        article.setType(Integer.parseInt(map.get("type").toString()));
        article.setDate(new Date());
        articleService.updateArticle(article);
    }
}
