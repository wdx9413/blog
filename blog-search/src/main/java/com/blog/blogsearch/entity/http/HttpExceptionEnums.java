package cn.blog.entity.http;

public enum HttpExceptionEnums {

    NOT_SUPPORT_METHOD_EXCEPTION("不支持请求方法"),
    NOT_SUPPORT_MEDIA_TYPE_EXCEPTION("不支持媒体类型"),
    NOT_ACCEPTABLE_MEDIA_TYPE_EXCPETION("不接受的媒体类型"),
    MISSING_PARH_VARIABLE("丢失URL实例变量"),
    MISSING_SERVLET_REQUEST_PARAMETER_EXCEPTION("丢失请求参数"),
    SERVLET_REQUEST_BINDING_EXCEPTION("请求参数绑定异常"),
    NOT_SUPPORT_CONVERSION_EXCEPTION("不支持的参数转换异常"),
    TYPE_MISMATCH_EXCEPTION("类型不匹配"),
    NOT_READABLE_HTTP_MESSAGE_EXCEPTION("HTTP消息不可读"),
    NOT_WRITABLE_HTTP_MESSAGE_EXCEPTION("HTTP消息不可写"),
    NOT_VALID_METHOD_ARGUMENT_EXCEPTION("方法参数无效"),
    MISSING_SERVLET_REQUEST_PART_EXCEPTION("缺失Servlet请求部分"),
    BIND_EXCEPTION("绑定例外"),
    NO_HANDLER_FOUND_EXCEPTION("没有找到资源"),
    ASYNC_REQUEST_TIMEOUT_EXCEPTION("异步请求超时");

    private String info;

    public String getInfo() {
        return info;
    }
    HttpExceptionEnums(String info) {
        this.info = info;
    }


}
