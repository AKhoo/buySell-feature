const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = require('./index.js');
const db = mongoose.connection;


const stockSchema = new mongoose.Schema({
  stockTicker: {
    type: String,
    required: [true, 'stockTicker field is required'],
  },
  stockName: {
    type: String,
    required: [true, 'stockName field is required'],
  },
  currentPrice: {
    type: Number,
    required: [true, 'currentPrice field is required'],
  },
  marketCap: {
    type: Number,
  },
  sector: {
    type: String,
  },
});

// define Transaction model
const Stock = mongoose.model('Stock', stockSchema);

// methods
const getStock = (ticker, cb) => {
  Stock.findOne(
    { stockTicker: ticker },
  ).then((stock) => {
    cb(null, stock);
  });
};

module.exports = Stock;
module.exports.getStock = getStock;
