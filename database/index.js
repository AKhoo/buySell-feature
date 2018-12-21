var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/robinsHood');

let transactionSchema = mongoose.Schema({
  stockName: {
    type: String,
    required: [true, 'stockName field is required']
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
    type: Date,
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
    type: Date
  },
  filledQuantity: {
    type: String
  },
  totalCost: {
    type: Number
  }
});

let Transaction = mongoose.model('Transaction', transactionSchema);



let save = () => {

};



module.exports.save = save;