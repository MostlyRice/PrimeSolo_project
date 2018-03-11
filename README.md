# Project Magic Binder

Magic Deckbox is a full-stack web application to keep track of your magic collection. It provides an inventory of your Magic card collection by adding, deleting, and editing your inventory using the Magic The Gathering API and the Mongo/PostgreSQL database (I haven’t decided on what kind of database I am having yet).

Link to the live version of the app if it's hosted on Heroku.

## Built With

- Node
- PEAN Stack
    - PostgreSQL
    - Express.js
    - AngularJS
    - Node.js
- Magic The Gathering API (URL)
- Heroku


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

### Installing

- npm install
- Start postreSQL database
- npm start
- localhost:5000

Steps to get the development environment running.

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
```


## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.
- [ ] Create binder collection.
- [ ] Add cards to binder collection.
- [ ] Update cards in binder collection.
- [ ] Delete cards from binder collection.

*Stretch goals*
- [ ] Consolidate like cards in collection.
- [ ] Create a wants view feature, cards that you are currently seeking
- [ ] Create a deckbox view feature, a way to keep track of lists that you were using

### Next Steps

Features that you would like to add at some point in the future.

- [ ] TCGplayer API, to add price estimates to see what your collection, decklists, and wants are priced at
- [ ] Using the TCGplayer API, an infograph to keep track of history of price spikes/falls

## Deployment

Add additional notes about how to deploy this on a live system

## Author(s)

* James Nguyen


## Acknowledgments

* Hat tip to anyone who's code was used