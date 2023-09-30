const routes = require('express').Router();
const auth = require('./auth/auth');
const user = require('./user/user');
// routes.use('/', auth);
routes.use('/api', auth);
routes.use('/api/user', user);
module.exports = routes;
