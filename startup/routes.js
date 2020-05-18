const express = require('express');
const events = require('../routes/events');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/events', events);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(express.static('public'));
  app.use(error);
}