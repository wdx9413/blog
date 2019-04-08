package cn.blog.controller;

import cn.blog.entity.Article;
import cn.blog.service.ArticleService;
import cn.blog.util.Convert;
import cn.blog.util.UUID;
import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import cn.blog.entity.User;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@RestController
public class ArticleController {

    @Autowired
    ArticleService articleService;


    @GetMapping("/articles")
    Result getArticleList() {
        return new Result(StatusCode.SUCCESS, articleService.getArticleList());
    }

    @GetMapping("/articles/{type}")
    Result getArticleListByType(@PathVariable Integer type) {

        return new Result(StatusCode.SUCCESS, articleService.getArticleListByType(type));
    }


    @GetMapping("/article")
    Result getArticle(@RequestParam("id") String id) {
        return new Result(StatusCode.SUCCESS, articleService.getArticleById(id));
    }
    @PutMapping("/article")
    @RequiresAuthentication
    Result insertArticle(@RequestBody String data) {
        Map<String, Object> map = Convert.jsonString2Map(data);
        User user = (User) SecurityUtils.getSubject().getSession().getAttribute("user");
        String userId = user.getId();
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
