DROP DATABASE hrpairs;
CREATE DATABASE hrpairs;

USE hrpairs;

CREATE TABLE infopairs (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first VARCHAR(50) NOT NULL,
  second VARCHAR(50),
  event VARCHAR(50) NOT NULL,
  misc VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE inforoster (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  image VARCHAR(255),
  PRIMARY KEY(id)
);

INSERT INTO inforoster (name, email, image) VALUES ('Joe Smith', 'joesmith@gmail.com', 'joesmith.jpg');