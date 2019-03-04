package com.blog.controller;

import com.blog.config.PasswordHelper;
import com.blog.entity.User;
import com.blog.service.UserService;
import com.blog.util.Convert;
import com.blog.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = {"http://localhost:3000", "null"})
public class UserController {

    @Autowired
    UserService userService;

//    @Autowired
//    private PasswordHelper passwordHelper;

    @GetMapping("/users")
    List<User> getUserList() {
        return userService.getUserList();
    }


}
