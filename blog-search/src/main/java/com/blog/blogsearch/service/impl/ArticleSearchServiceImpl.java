package com.blog.blogsearch.service.impl;

import com.blog.blogsearch.dao.ArticleSearchDao;
import com.blog.blogsearch.entity.Article;
import com.blog.blogsearch.service.ArticleSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ArticleSearchServiceImpl implements ArticleSearchService {
    @Autowired
    ArticleSearchDao articleSearchDao;


    @Override
    public void save(Article article) {
        articleSearchDao.save(article);
    }

    @Override
    public Page<Article> findByTitleLike(String keywords, int page, int size) {

        PageRequest pageRequest = PageRequest.of(page - 1, size);
        return articleSearchDao.findByTitleOrContentLike(keywords, keywords, pageRequest);

    }
}
