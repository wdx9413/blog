package cn.blog.util;

public class Utils {
    static public boolean testEmail(String email) {
        if (email == null) return false;
        return email.matches("^[A-Za-z]\\w{5,}@(\\w+\\.)+(\\w+)$");
    }
}
