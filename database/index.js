var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/robinsHood');

let transactionSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Name field is required']
  },
  repos: {
    type: Array,
    required: [true, 'Repos are required']
  }
});

let Transaction = mongoose.model('Transaction', transactionSchema);



let save = () => {

};



module.exports.save = save;