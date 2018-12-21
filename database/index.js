var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/robinsHood');

let transactionSchema = mongoose.Schema({
  stockName: {
    type: String,
    required: [true, 'stockName field is required']
  },
  stockTicker: {
    type: String,
    required: [true, 'stockTicker field is required']
  },
  orderType: {
    type: String,
    required: [true, 'orderType field is required']
  },
  timeInForce: {
    type: String,
    required: [true, 'timeInForce field is required']
  },
  date: {
    type: String,
    required: [true, 'date field is required']
  },
  status: {
    type: String,
    required: [true, 'status field is required']
  },
  quantity: {
    type: Number,
    required: [true, 'quantity field is required']
  },
  filled: {
    type: String
  },
  filledQuantity: {
    type: String
  },
  totalCost: {
    type: Number
  }
});

let stockSchema = mongoose.Schema({
  stockName: {
    type: String,
    required: [true, 'stockName field is required']
  },
  stockTicker: {
    type: String,
    required: [true, 'stockTicker field is required']
  },
  currentPrice: {
    type: Number,
    required: [true, 'currentPrice field is required']
  },
  date: {
    type: String,
    required: [true, 'date field is required']
  }
});

let Transaction = mongoose.model('Transaction', transactionSchema);
let Stock = mongoose.model('Stock', stockSchema);



let save = () => {

};


// mongoimport --db robinsHood --collection stocks --file nasdaq-data.csv --type csv --headerline
module.exports.save = save;