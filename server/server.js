const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const passport = require('./strategies/sql.localstrategy');
const sessionConfig = require('./modules/session-middleware');

// Route includes
const userRouter = require('./routes/user.router');
const cardRouter = require('./routes/cardRouter');
const haveRouter = require('./routes/haveRouter');
const tradeRouter = require('./routes/tradeRouter');
const wishRouter = require('./routes/wishRouter');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/cards', cardRouter);
app.use('/have', haveRouter);
app.use('/trade', tradeRouter);
app.use('/wish', wishRouter);

// Serve static files
app.use(express.static('server/public'));

const PORT = process.env.PORT || 3005;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
