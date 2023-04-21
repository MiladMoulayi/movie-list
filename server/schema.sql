CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  title varchar(40) NOT NULL,
  watched BOOLEAN NOT NULL DEFAULT FALSE,,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

