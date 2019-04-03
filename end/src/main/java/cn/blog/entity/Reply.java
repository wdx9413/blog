package cn.blog.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class Reply implements Serializable {

    String id;
    String content;
    String commentId;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    Date date;
    String visitorId;
    String visitorName;
    String visitorAvatar;
    String visitorEmail;

    String targetVisitorId;
    String targetVisitorName;
    String targetVisitorAvatar;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getVisitorId() {
        return visitorId;
    }

    public void setVisitorId(String visitorId) {
        this.visitorId = visitorId;
    }

    public String getVisitorName() {
        return visitorName;
    }

    public void setVisitorName(String visitorName) {
        this.visitorName = visitorName;
    }

    public String getVisitorAvatar() {
        return visitorAvatar;
    }

    public void setVisitorAvatar(String visitorAvatar) {
        this.visitorAvatar = visitorAvatar;
    }

    public String getVisitorEmail() {
        return visitorEmail;
    }

    public void setVisitorEmail(String visitorEmail) {
        this.visitorEmail = visitorEmail;
    }

    public String getTargetVisitorName() {
        return targetVisitorName;
    }

    public void setTargetVisitorName(String targetVisitorName) {
        this.targetVisitorName = targetVisitorName;
    }

    public String getTargetVisitorAvatar() {
        return targetVisitorAvatar;
    }

    public void setTargetVisitorAvatar(String targetVisitorAvatar) {
        this.targetVisitorAvatar = targetVisitorAvatar;
    }

    public String getTargetVisitorId() {
        return targetVisitorId;
    }

    public void setTargetVisitorId(String targetVisitorId) {
        this.targetVisitorId = targetVisitorId;
    }

    @Override
    public String toString() {
        return "Reply{" +
                "id='" + id + '\'' +
                ", content='" + content + '\'' +
                ", commentId='" + commentId + '\'' +
                ", date=" + date +
                ", visitorId='" + visitorId + '\'' +
                ", visitorName='" + visitorName + '\'' +
                ", visitorAvatar='" + visitorAvatar + '\'' +
                ", visitorEmail='" + visitorEmail + '\'' +
                ", targetVisitorId='" + targetVisitorId + '\'' +
                ", targetVisitorName='" + targetVisitorName + '\'' +
                ", targetVisitorAvatar='" + targetVisitorAvatar + '\'' +
                '}';
    }
}
