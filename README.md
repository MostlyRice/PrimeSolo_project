# Project Magic Binder

Magic Deckbox is a full-stack web application to keep track of your magic collection. It provides an inventory of your Magic card collection by adding, deleting, and editing your inventory using the Magic The Gathering API and the PostgreSQL database. There will be multiple views within the app to include: Home, search, trades, wishlist, deckbox, and an info page.

Link to the live version of the app if it's hosted on Heroku.

## Built With
- SEAN Stack
    - SQL
    - Express.js
    - AngularJS
    - Node.js
- Scryfall API (URL:https://scryfall.com/docs/api)
- Angular-Material
- Angular-Aria
- Angular-Messages
- SweetAlert
- Passport

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

### Installing

- npm install
- Start postreSQL database
- Copy, paste, and execute the SQL text from MTGDatabase.sql
- npm start
- localhost:5000

Steps to get the development environment running.

```sql
CREATE TABLE users (
id serial primary key,
username varchar(80) not null UNIQUE,
password varchar(240) not null
);

CREATE TABLE cards (
id serial PRIMARY key,
cardname VARCHAR (80),
type VARCHAR(500),
set_name VARCHAR(500),
usd VARCHAR,
image VARCHAR
);

CREATE TABLE user_cards (
user_id INT REFERENCES users(id),
card_id INT REFERENCES cards(id),
quantity INT,
cardtotals FLOAT,
havelist BOOLEAN,
wishlist BOOLEAN,
tradelist BOOLEAN
);
);
```

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items to complete:

- [x] Add cards to binder collection
- [ ] Update quantity of said card in  binder collection.
- [ ] Delete cards from binder collection.
- [x] Create a "Wishlist" view feature, featuring cards that you are currently seeking
- [x] Create a "Havelist" view feature, a way to keep track of cards that your currently have
- [x] Create a "Tradelist" view feature, a way to keep track of cards that you were willing to trade

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Utilizing the Profile Page to be able to see other people's lists
- [ ] Using the Scryfall API, an infograph to keep track of history of price spikes/falls
- [ ] Export lists as text documents
- [ ] Create a trading view to compare the price difference between a trading transaction 

## Deployment

Add additional notes about how to deploy this on a live system

## Author(s)

* James Nguyen


## Acknowledgments

* Hat tip to anyone who's code was used