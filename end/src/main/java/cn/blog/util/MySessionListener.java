package cn.blog.util;

import org.apache.shiro.session.Session;
import org.apache.shiro.session.SessionListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class MySessionListener implements SessionListener {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Override
    public void onStart(Session session) {
        logger.info("create session : " + session.getId());
    }

    @Override
    public void onStop(Session session) {
        logger.info("session stop : " + session.getId());
    }

    @Override
    public void onExpiration(Session session) {
        logger.info("session expiration : " + session.getId());
    }
}
