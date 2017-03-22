const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const methodOverride = require('method-override');
const cardsAPI = require('./routes/cardsAPI');

const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('api/kanban', cardsAPI);

app.get('/', (req, res) => {
    res.json('sever up');
})


module.exports = app;