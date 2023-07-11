const { connect, connection } = require('mongoose');

connect('mongodb://localhost/smapimod18', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
