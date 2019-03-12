package com.blog.controller;

import com.blog.entity.Result;
import com.blog.entity.StatusCode;
import com.blog.service.UserService;
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


}
