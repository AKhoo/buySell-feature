const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = require('./index.js');
const db = mongoose.connection;


let stockSchema = new mongoose.Schema ({
  stockTicker: {
    type: String,
    required: [true, 'stockTicker field is required']
  },
  stockName: {
    type: String,
    required: [true, 'stockName field is required']
  },
  currentPrice: {
    type: Number,
    required: [true, 'currentPrice field is required']
  },
  marketCap: {
    type: Number,
  },
  sector: {
    type: String,
  }
});


// methods

let getStock = (ticker, cb) => {
  Stock.findOne(
    {stockTicker: ticker}).then((stock) => {
      console.log('STOCK', stock)
      cb(null, stock)
  })
};

// define Transaction model
var Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock
module.exports.getStock = getStock