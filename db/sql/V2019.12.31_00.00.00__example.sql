CREATE TABLE user (
	user_id int not null, 
	user_name varchar(50) not null,
	PRIMARY KEY (user_id)
);

CREATE TABLE artist (
	artist_id int not null, 
	artist_name varchar(200) not null,
	PRIMARY KEY (artist_id)
);

CREATE TABLE song (
	song_id int not null, 
	song_name varchar(100) not null,
	artist_id int not null
	PRIMARY KEY (user_id)
);
