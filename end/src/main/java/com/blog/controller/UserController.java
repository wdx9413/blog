package com.blog.controller;

import com.blog.entity.User;
import com.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "null"})
public class UserController {

    @Autowired
    UserService userService;
    @GetMapping("/")
    List<User> getUserList() {
        return userService.getUserList();
    }

}
