const mongoose = require('mongoose');
const Transaction = require('./Transaction.js');
const Stock = require('./Stock.js');

mongoose.connect('mongodb://localhost/robinsHood_buySell');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var Schema = mongoose.Schema;

module.exports = Schema;