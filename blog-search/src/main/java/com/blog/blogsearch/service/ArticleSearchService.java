package com.blog.blogsearch.service;

import com.blog.blogsearch.entity.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ArticleSearchService {
    void save(Article article);

    public Page<Article> findByTitleLike(String keywords, int page, int size);
}
