
DROP database IF EXISTS youcamp;
CREATE DATABASE youcamp; 
----------------------------------------------------

CREATE TABLE test (
  userId int(8) PRIMARY KEY NOT NULL auto_increment ,
  userName varchar(255),
);