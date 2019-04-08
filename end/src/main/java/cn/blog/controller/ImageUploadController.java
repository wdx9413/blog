package cn.blog.controller;

import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import cn.blog.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImageUploadController {
    @Autowired
    StorageService storageService;

    @PostMapping("/upload")
    Result upload(@RequestParam("image") MultipartFile file) throws Exception {
        return new Result(StatusCode.SUCCESS, storageService.store(file));
    }

    @GetMapping("/images/{filename:.+}")
    Resource get(@PathVariable String filename) throws Exception {
        return storageService.loadAsResource(filename);
    }
}
