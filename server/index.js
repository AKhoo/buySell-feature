const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js')
const transactions = require('../database/Transaction.js')
const stocks = require('../database/Stock.js')
const port = 3333;

// app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/stocks/:stockTicker', (req, res) => {
  console.log('PARAMMMMSSSSSS', req.params);
  stocks.getStock(req.params.stockTicker, (err, data) => {
    if (err) {
      res.json({ message: 'what\'s a stock?' });
    } else {
      res.json(data);
    }
  });
});

app.post('/transactions', (req, res) => {
  const transaction = {
    stockName: req.body.stockName,
    stockTicker: req.body.stockTicker,
    currentPrice: req.body.currentPrice,
    quantity: req.body.quantity,
  };

  transactions.newTransaction(transaction, (err, data) => {
    if (err) {
      res.json({ message: 'ooo, guess you missed that trade... hope it wasn\'t important!' });
    } else {
      res.json(data);
    }
  });
});

app.listen(port, () => { console.log(`Listening on ${port} !!!`); });
