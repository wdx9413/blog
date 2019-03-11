package com.blog.config;

import com.blog.entity.Result;
import com.blog.entity.StatusCode;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
@ResponseBody
public class CustomExceptionHandler {

    @ExceptionHandler(Exception.class)
    public final Result handleAllExceptions(Exception e, WebRequest request) {
        return new Result(StatusCode.ERROR, "");
    }
}
