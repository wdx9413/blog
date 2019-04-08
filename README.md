# 个人博客的开发

演示地址：[39.97.166.150](http://39.97.166.150)

功能:

  1. 前台
      * 文章浏览
      * 评论功能
      * 留言功能
  2. 后台
      * 登陆注册
      * 文章管理
      * 富文本编辑器
  3. 搜索功能（未部署）

前端（front）：

* 构建工具：create-react-app
* 技术：react+ router + redux + react-loadable
* 富文本编辑器：react-draft-wysiwyg

后端（end）：

* 框架：springboot 2.1.3-RELEASE
* 数据库： mysql
* 缓存层： redis
* 安全框架： shiro（TODO -> spring security）

搜索（blog-search）：

* 技术： elasticsearch-6.2.2
