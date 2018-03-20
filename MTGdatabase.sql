CREATE TABLE users (
id serial primary key,
username varchar(80) not null UNIQUE,
password varchar(240) not null
);

CREATE TABLE cards_table (
id serial PRIMARY KEY,
cardname VARCHAR (80),
type VARCHAR(500),
image path
);

CREATE TABLE wishlist_user (
user_id INT REFERENCES users(id),
card_id INT REFERENCES cards_table(id),
quantity INT
);

CREATE TABLE decklist_user (
user_id INT REFERENCES users(id),
card_id INT REFERENCES cards_table(id),
quantity INT
);

CREATE TABLE trade_user (
user_id INT REFERENCES users(id),
card_id INT REFERENCES cards_table(id),
quantity INT
);