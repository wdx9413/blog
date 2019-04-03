/*
 Navicat Premium Data Transfer

 Source Server         : aliyun
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : 39.97.166.150:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 04/04/2019 00:00:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章ID',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容',
  `type` int(1) NOT NULL COMMENT '类型，1是前端，2是后端，3是数据库，4是系统//暂时',
  `date` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `state` int(1) NOT NULL DEFAULT 1 COMMENT '状态，-1不存在，1存在',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1e8f66ca3a7649f58249ad67c9fa4e75', '为', '<p>武器恶趣味</p>\n', 1, '2019-03-22 14:40:18', 1);
INSERT INTO `article` VALUES ('3d0a2d6d94704e16b998ea0e35d7f005', '3', '<p>3</p>\n', 1, '2019-03-22 14:40:21', 1);
INSERT INTO `article` VALUES ('6fa399431e1c43cfb4f72f5c97b082a1', '4', '<p>4</p>\n', 1, '2019-03-22 14:40:24', 1);
INSERT INTO `article` VALUES ('a5ab39e56ebf4b21bd1eee9a786258f8', '2', '<p>2</p>\n', 1, '2019-03-22 14:40:26', 1);
INSERT INTO `article` VALUES ('d69eebf3d2ed49f4a3c2a18e07d85fe8', '1', '<p>1</p>\n', 1, '2019-03-22 14:40:31', 1);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '主键id',
  `content` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容',
  `article_id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '对应文章id',
  `visitor_id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论用户id',
  `date` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `reply_count` int(10) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000000,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_article_id`(`article_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `visitor_id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('248b9292573c4f689e2fc6d3f04b1e54', '来看看我熊儿子跟玄孙子啊!', '9eb3cde4ee614bafae1d96317959fde9', '2019-04-03 21:39:57');
INSERT INTO `message` VALUES ('3fedeb1da7bf46c7b317839b7c271fce', '3213123131', '69db56f9e2654f7db1d4985f3871f6fe', '2019-04-01 20:42:42');
INSERT INTO `message` VALUES ('8a354bbbae5349469abcf75ccd0252e2', 'dasda', '7b3d93762e0f497d9e9c56432d0aa973', '2019-04-01 17:33:49');
INSERT INTO `message` VALUES ('bc06cda6c345410fbc974e3ccb5c234e', 'eqwewqeq', '1ad00a9e7d664c219f32cd01144b09a5', '2019-04-01 20:41:56');
INSERT INTO `message` VALUES ('d6022cc262cd4b12b603e53c2a07b972', 'dasda', '435131654ec4468e990a5eb30c80a404', '2019-04-01 17:34:14');

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply`  (
  `id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `comment_id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `visitor_id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `target_visitor_id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE COMMENT '评论索引'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户ID',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `avatar` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `salt` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码加密混淆码',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uni_username`(`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('f9c2d35d463d45839f5393d6706023bf', 'admin', '97cbd19fe9ffb2588bb1722f2c6a73b5', NULL, NULL, NULL, '2a793fbeb2f9b002dfbfe432e70dadfb');

-- ----------------------------
-- Table structure for user_article
-- ----------------------------
DROP TABLE IF EXISTS `user_article`;
CREATE TABLE `user_article`  (
  `user_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `article_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for visitor
-- ----------------------------
DROP TABLE IF EXISTS `visitor`;
CREATE TABLE `visitor`  (
  `id` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avatar` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uniq_email`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of visitor
-- ----------------------------
INSERT INTO `visitor` VALUES ('1ad00a9e7d664c219f32cd01144b09a5', 'wangwu', 'weooe1@163.com', NULL);
INSERT INTO `visitor` VALUES ('435131654ec4468e990a5eb30c80a404', '321231', 'wedx11@163.com', NULL);
INSERT INTO `visitor` VALUES ('69db56f9e2654f7db1d4985f3871f6fe', '32113', 'a21313131@163.com', NULL);
INSERT INTO `visitor` VALUES ('7b3d93762e0f497d9e9c56432d0aa973', '321231', 'wedx121@163.com', NULL);
INSERT INTO `visitor` VALUES ('9eb3cde4ee614bafae1d96317959fde9', '你鹏爷爷', 'lpp1103@163.com', NULL);

SET FOREIGN_KEY_CHECKS = 1;
