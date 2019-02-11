package com.blog.controller;

import com.blog.config.PasswordHelper;
import com.blog.entity.Result;
import com.blog.entity.ResultEnums;
import com.blog.entity.StatusCode;
import com.blog.service.UserService;
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
public class LoginController {
    @Autowired
    UserService userService;

    @PostMapping("admin/login")
    public Result login(@RequestBody String data) {
        String username = null;
        String password = null;
        String remember = null;
        try {
            Map<String, String> map = new ObjectMapper().readValue(data, HashMap.class);
            username = map.get("username");
            password = map.get("password");
            remember = map.get("remember");
        } catch (Exception e) {

        }
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
                map.put("token", token);
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
}
