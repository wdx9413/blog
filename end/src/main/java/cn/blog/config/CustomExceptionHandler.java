package cn.blog.config;

import cn.blog.entity.http.Result;
import cn.blog.entity.http.StatusCode;
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
