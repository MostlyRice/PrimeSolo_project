CREATE TABLE users (
id serial primary key,
username varchar(80) not null UNIQUE,
password varchar(240) not null
);

CREATE TABLE cards (
id serial PRIMARY key,
cardname VARCHAR (80),
type VARCHAR(500),
image path
);

CREATE TABLE user_cards (
user_id INT REFERENCES users(id),
card_id INT REFERENCES cards(id),
quantity INT,
wishlist BOOLEAN,
trades BOOLEAN
);
