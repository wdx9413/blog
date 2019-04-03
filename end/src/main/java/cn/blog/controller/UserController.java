package cn.blog.controller;

import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
import cn.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = {"http://localhost:3000", "null"})
public class UserController {

    @Autowired
    UserService userService;

//    @Autowired
//    private PasswordHelper passwordHelper;

//    @GetMapping("/users")
//    Result getUserList() {
//        return new Result(StatusCode.SUCCESS, userService.getUserList());
//    }

    @GetMapping("/user/{userId}")
    Result getUserById(@PathVariable("userId") String userId) {
        return new Result(StatusCode.SUCCESS, userService.getUserPrivateInfo(userId));
    }



}
