package cn.blog.controller;

import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    Result index() {
        return new Result(StatusCode.SUCCESS, "rest application");
    }
}
