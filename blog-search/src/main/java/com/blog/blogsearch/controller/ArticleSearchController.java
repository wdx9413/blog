package com.blog.blogsearch.controller;

import cn.blog.entity.http.StatusCode;
import com.blog.blogsearch.entity.Article;
import com.blog.blogsearch.service.ArticleSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import cn.blog.entity.http.Result;

@RestController
@RequestMapping("/article")
@CrossOrigin
public class ArticleSearchController {
    @Autowired
    ArticleSearchService articleSearchService;

    @PutMapping
    public Result save(@RequestBody Article article) {
        articleSearchService.save(article);
        return new Result(StatusCode.SUCCESS, "success");
    }

    @GetMapping("/search/{keywords}/{page}/{size}")
    public Result findByTitleLike(@PathVariable String keywords, @PathVariable int page, @PathVariable int size) {
        return new Result(StatusCode.SUCCESS, articleSearchService.findByTitleLike(keywords, page, size));
    }
}
