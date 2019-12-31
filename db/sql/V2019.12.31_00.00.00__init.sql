create table "user"
(
	id serial not null
		constraint user_pk
			primary key,
	user_name varchar(50) not null,
	user_email varchar(100)
);

alter table "user" owner to you_can_call_me_karaok_al;

create unique index user_user_name_uindex
	on "user" (user_name);

create table singer
(
	singer_id serial not null
		constraint singer_pk
			primary key
		constraint singer_user_id_fk
			references "user",
	singer_name varchar(100) not null
);

alter table singer owner to you_can_call_me_karaok_al;

create unique index singer_singer_id_uindex
	on singer (singer_id);

create table performance
(
	performance_id serial not null
		constraint performance_pk
			primary key,
	performance_name varchar(50),
	performance_date date not null,
	performance_location varchar(50)
);

alter table performance owner to you_can_call_me_karaok_al;

create unique index performance_performance_id_uindex
	on performance (performance_id);

create table artist
(
	artist_id serial not null
		constraint artist_pk
			primary key,
	artist_first_name varchar(100),
	artist_last_name varchar(100)
);

alter table artist owner to you_can_call_me_karaok_al;

create table song
(
	song_id serial not null
		constraint song_pk
			primary key,
	song_name varchar(100) not null,
	song_url varchar(300),
	song_artist_id integer
		constraint song_artist_artist_id_fk
			references artist
);

alter table song owner to you_can_call_me_karaok_al;

create unique index song_song_id_uindex
	on song (song_id);

create unique index song_song_url_uindex
	on song (song_url);

create unique index artist_artist_id_uindex
	on artist (artist_id);

