DROP TABLE IF EXISTS knight_chess_users;
CREATE TABLE knight_chess_users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	pw VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL
);

INSERT INTO knight_chess_users (username, pw, email) VALUES ("tommyrobbinsXoXo", "hunter2", "tomrobbins@google.com")