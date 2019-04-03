package cn.blog.util;

public class UUID {
    public static String get() {
        return java.util.UUID.randomUUID().toString().replace("-", "");
    }
}
