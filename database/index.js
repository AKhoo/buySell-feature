const mongoose = require('mongoose');
const Transaction = require('./Transaction.js');
const Stock = require('./Stock.js');

// connect to mongo via localhost
const connection = mongoose.connect('mongodb://localhost/robinsHood', {
  useMongoClient: true,
});

// define connection
const db = mongoose.connection;

// if there's a connection error log it
db.on('error', console.error.bind(console, 'connection error:'));

// RUN THIS CODE TO SEED MONGO DATABASE
// mongoimport --db robinsHood --collection stocks --file nasdaq-data.csv --type csv --headerline


const { Schema } = mongoose.Schema;

module.exports = Schema;
