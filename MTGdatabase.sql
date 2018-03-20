CREATE TABLE user_accounts (
id serial primary key,
username varchar(80) NOT NULL,
password varchar(240) NOT NULL
);

CREATE TABLE cards_table (
id serial PRIMARY KEY,
cardname VARCHAR (80),
type VARCHAR(500),
image path
);

CREATE TABLE wishlist_user (
user_id INT REFERENCES user_accounts(id),
card_id INT REFERENCES cards_table(id),
quantity INT
);

CREATE TABLE decklist_user (
user_id INT REFERENCES user_accounts(id),
card_id INT REFERENCES cards_table(id),
quantity INT
);

CREATE TABLE trade_user (
user_id INT REFERENCES user_accounts(id),
card_id INT REFERENCES cards_table(id),
quantity INT
);