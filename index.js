const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const keys = require('./config/keys');

const app = express();

// Routes
const listRoutes = require('./routes/list-routes');
const userRoutes = require('./routes/user-routes');

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI,
    {
        useNewUrlParser: true,
        connectTimeoutMS: 5000,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(
    () => { console.log('connected to mongodb'); },
    (err) => { console.log(err); },
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set up routes
app.use('/list', listRoutes);
app.use('/user', userRoutes);

// Setup static directory to server
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('todo');
});

app.listen('3000', () => {
    console.log('listening on port 3000');
});
