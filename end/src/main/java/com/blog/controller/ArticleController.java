package com.blog.controller;

import com.blog.entity.Article;
import com.blog.entity.Result;
import com.blog.entity.StatusCode;
import com.blog.entity.User;
import com.blog.service.ArticleService;
import com.blog.service.UserService;
import com.blog.util.Convert;
import com.blog.util.UUID;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Map;

@RestController
public class ArticleController {

    @Autowired
    ArticleService articleService;

    @Autowired
    UserService userService;

    @GetMapping("/articles")
    Result getArticleList(Integer type, HttpServletRequest request) {
        switch (type) {
            case 0:
                return new Result(StatusCode.SUCCESS, articleService.getArticleList());
            default:
                return new Result(StatusCode.SUCCESS, articleService.getArticleListByType(type));
        }
    }

    @GetMapping("/article")
    Result getArticle(@RequestParam("id") String id) {
        return new Result(StatusCode.SUCCESS, articleService.getArticleById(id));
    }
    @PutMapping("/article")
    @RequiresAuthentication
    Result insertArticle(@RequestBody String data) {
        Map<String, Object> map = Convert.jsonString2Map(data);
        String username = (String) SecurityUtils.getSubject().getPrincipal();
        String userId = userService.findByName(username).getId();
        Article article = new Article();
        article.setId(UUID.get());
        article.setTitle(map.get("title").toString());
        article.setContent(map.get("content").toString());
        article.setType(Integer.parseInt(map.get("type").toString()));
        article.setState(1);
        article.setDate(new Date());
        articleService.insertArticleByUserId(userId, article);
        return new Result(StatusCode.SUCCESS, "");
    }
    @DeleteMapping("/article")
    @RequiresAuthentication
    Result deleteArticle(@RequestBody String data) {
        Map<String, String> map = Convert.jsonString2Map(data);
        String articleId = map.get("id");
        articleService.deleteArticleById(articleId);
        return new Result(StatusCode.SUCCESS, "");
    }
    @PostMapping("/article")
    @RequiresAuthentication
    Result updateArticle(@RequestBody String data) {
        Map<String, Object> map = Convert.jsonString2Map(data);
        Article article = new Article();
        article.setId(map.get("id").toString());
        article.setTitle(map.get("title").toString());
        article.setContent(map.get("content").toString());
        article.setType(Integer.parseInt(map.get("type").toString()));
        article.setDate(new Date());
        articleService.updateArticle(article);
        return new Result(StatusCode.SUCCESS, "");
    }
}
