DROP DATABASE IF EXISTS dynamic_bookmarks;
CREATE DATABASE dynamic_bookmarks;
USE dynamic_bookmarks;

CREATE TABLE bookmarks
(
	id int NOT NULL AUTO_INCREMENT,
link varchar(255) NOT NULL,
category varchar(100) NOT NULL,
notes varchar(1000) NOT NULL,
tag1 varchar(40) NOT NULL,
tag2 varchar(40) NOT NULL,
tag3 varchar(40) NOT NULL,
tag4 varchar(40) NOT NULL,
tag5 varchar(40) NOT NULL,

	PRIMARY KEY (id)
);
