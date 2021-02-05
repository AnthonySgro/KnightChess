DROP TABLE IF EXISTS knight_chess_db
create table knight_chess_db (
	id BIGSERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(50),
	username VARCHAR(50),
	password_hash VARCHAR(150)
);