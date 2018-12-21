const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js')
const transactions = require('../database/Transaction.js')
const stocks = require('../database/Stock.js')
const port = 3333;

// app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/:stockTicker', (req, res) => {
    console.log('PARAMMMMSSSSSS', req.params);
    stocks.getStock(req.params.stockTicker, (err, data) => {
        if (err) {
            res.json({message: 'what\'s a stock?'});
        } else {
            res.json(data)
        }
    });
});

// app.post('api/transactions', (req, res) => {
    
//     console.log('PARAMMMMSSSSSS', req.method, req.path, req.body, req.params.stockTicker);

//     var transaction = {
//         stockName: 'Facebook',
//         stockTicker: 'FB',
//         currentPrice: 123.45,
//         quantity: 10
//     }

//     transactions.newTransaction(transaction, (err, data) => {
//         if (err) {
//             res.json({message: 'ooo, guess you missed that trade... hope it wasn\'t important!'});
//         } else {
//             res.json(data)
//         }
//     });
// });

app.listen(port, () => { console.log('Listening on ' + port + '!!!'); });