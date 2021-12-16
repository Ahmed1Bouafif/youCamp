DROP DATABASE IF EXISTS youcamp;
CREATE DATABASE youcamp;
USE youcamp;

-- CREATE TABLE test (
--   userId int  NOT NULL AUTO_INCREMENT ,
--   userName varchar(255),
--   PRIMARY KEY(userId)
-- );
CREATE TABLE users (
  userId int NOT NULL AUTO_INCREMENT ,
  userName varchar(255),
  firstName varchar(255),
  Adress varchar(255),
  phoneNumber varchar(255),
  img varchar(255),
  PRIMARY KEY (userId)
);



CREATE TABLE sellproducts (
  productId int NOT NULL AUTO_INCREMENT ,
  productName varchar(255),
  price int ,
  img varchar(255),
  buyer varchar(255),
  owner int(8),
  FOREIGN KEY (owner) REFERENCES users(userId),
  PRIMARY KEY (productId)
);
CREATE TABLE posts (
  postId int NOT NULL AUTO_INCREMENT ,
  content varchar(255),
  imgUrl varchar(255),
  owner int(8),
  FOREIGN KEY (owner) REFERENCES users(userId),
  PRIMARY KEY (postId)
);
CREATE TABLE comments (
  commentId int NOT NULL AUTO_INCREMENT ,
  content varchar(50),
  user int(8),
  post int ,
  FOREIGN KEY (user) REFERENCES users(userId),
  FOREIGN KEY (post) REFERENCES posts(postId),
  PRIMARY KEY (commentId)
);


