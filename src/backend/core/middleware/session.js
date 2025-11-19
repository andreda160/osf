const session = require('express-session');

module.exports = session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
});