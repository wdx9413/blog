package cn.blog.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.util.stream.Stream;

public interface StorageService {
    void init() throws IOException;
    String store(MultipartFile file) throws Exception;
//    Stream<Path> loadAll() throws IOException, Exception;
    Path load(String filename);
    Resource loadAsResource(String filename) throws Exception;
    void deleteAll();

}
