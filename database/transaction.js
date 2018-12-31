const mongoose = require('mongoose');

// get current date and time string
function getDateAndTime() {
  // get current date
  const date = new Date();
  // set date to string
  const dateStr = date.toDateString();
  // get current time as string
  const time = date.toLocaleTimeString();
  // return full string
  return `${dateStr}${' '}${time}`;
}

// define transaction schema
const transactionSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: [true, 'stockName field is required'],
  },
  stockTicker: {
    type: String,
    required: [true, 'stockTicker field is required'],
  },
  currentPrice: {
    type: Number,
    required: [true, 'currentPrice field is required'],
  },
  orderType: {
    type: String,
    required: [true, 'orderType field is required'],
  },
  timeInForce: {
    type: String,
    required: [true, 'timeInForce field is required'],
  },
  date: {
    type: String,
    required: [true, 'date field is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'quantity field is required'],
  },
  status: {
    type: String,
    required: [true, 'status field is required'],
  },
  filled: {
    type: String,
  },
  filledQuantity: {
    type: String,
  },
  totalCost: {
    type: Number,
  },
});

// define Transaction model
const Transaction = mongoose.model('transaction', transactionSchema);


// methods
const loadAll = (cb) => {
  Transaction.find({}).then((txs) => {
    cb(null, txs);
  });
};

const newTransaction = (transaction, cb) => {
  const newTx = new Transaction({
    stockName: transaction.stockName,
    stockTicker: transaction.stockTicker,
    currentPrice: transaction.currentPrice,
    orderType: 'market',
    timeInForce: 'GFD',
    date: getDateAndTime(),
    quantity: transaction.quantity,
    status: 'pending',
    filled: 'TBD',
    filledQuantity: 0,
    totalCost: 0.00,
  });
  console.log(newTx);
  newTx.save().then((tx) => {
    cb(null, tx);
  });
};

// export
module.exports = Transaction;
module.exports.newTransaction = newTransaction;
module.exports.loadAll = loadAll;
