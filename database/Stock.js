const mongoose = require('mongoose');
const Schema = require('./index.js');

// RUN THIS CODE TO SEED MONGO DATABASE
// mongoimport --db robinsHood --collection stocks --file nasdaq-data.csv --type csv --headerline

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
    stocks.findOne({stockTicker: ticker}).then((stock) => {
      cb(null, stock)
    })
};

// define Transaction model
var Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock