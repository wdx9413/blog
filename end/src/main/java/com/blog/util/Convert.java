package com.blog.util;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Convert {
    public static Map jsonString2Map(String json) {
        try {
            return new ObjectMapper().readValue(json, HashMap.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new HashMap();
    }
}
