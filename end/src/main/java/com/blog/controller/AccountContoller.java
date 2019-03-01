package com.blog.controller;

import com.blog.config.PasswordHelper;
import com.blog.entity.Result;
import com.blog.entity.ResultEnums;
import com.blog.entity.StatusCode;
import com.blog.entity.User;
import com.blog.service.UserService;
import com.blog.util.Convert;
import com.blog.util.UUID;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "null"})
public class AccountContoller {
    @Autowired
    UserService userService;
    @Autowired
    private PasswordHelper passwordHelper;

    @PostMapping("/login")
    public Result login(@RequestBody String data) {
        Map<String, Object> dataMap = Convert.jsonString2Map(data);
        String username = dataMap.get("username").toString();
        String password = dataMap.get("password").toString();
        String remember = dataMap.get("remember").toString();
        if (username != null && password != null) {
            Subject subject = SecurityUtils.getSubject();
            UsernamePasswordToken token = new UsernamePasswordToken(username, password);
            if (remember != null &&  "true".equals(remember)) {
                token.setRememberMe(true);
            } else {
                token.setRememberMe(false);
            }
            try {
                subject.login(token);
                System.out.println("是否登录：" + subject.isAuthenticated());
                Map map = new HashMap();
                map.put("username", username);
                return new Result(StatusCode.SUCCESS, map);
            } catch (UnknownAccountException e) {
                e.printStackTrace();
                return new Result(StatusCode.ERROR, ResultEnums.LOGIN_UNKNOWN);
            } catch (IncorrectCredentialsException e) {
                e.printStackTrace();
                return new Result(StatusCode.ERROR, ResultEnums.LOGIN_ERROR);
            } catch (Exception e) {
                e.printStackTrace();
                return new Result(StatusCode.ERROR, ResultEnums.INNER_ERROR);
            }

        }
        return new Result(StatusCode.ERROR, ResultEnums.INNER_ERROR);
    }

    @PutMapping(value = "/register")
    void register(@RequestBody String data) {
        Map<String, String> map = Convert.jsonString2Map(data);
        User user = new User();
        user.setId(UUID.get());
        user.setUsername(map.get("username"));
        user.setPassword(map.get("password"));
        user.setPhone(map.get("phone"));
//        user.setSalt(UUID.get());
        passwordHelper.encryptPassword(user);
        System.out.println(user);
        userService.insertUser(user);
    }

    @PostMapping("/testUser")
    boolean testUser(@RequestBody String username) {
        return userService.findByName(username) != null;
    }
}
