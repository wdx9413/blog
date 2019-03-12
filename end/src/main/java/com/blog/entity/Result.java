package com.blog.entity;

import java.io.Serializable;

public class Result implements Serializable {
    private Integer code;
    private Object data;

    public Result() {

    }
    public Result(Integer code, Object data) {
        this.code = code;
        this.data = data;
    }
    public Result(Integer code, ResultEnums enums) {
        this.code = code;
        this.data = enums.getInfo();
    }
    public Result(Integer code, HttpExceptionEnums enums) {
        this.code = code;
        this.data = enums.getInfo();
    }


    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
