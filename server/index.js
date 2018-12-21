const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const save = require('../database/index.js')
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('api/stocks', (req, res) => {
    console.log('BODYYYYYYY', req.body)
    save.getStock(req.body.stockTicker, (err, data) => {
        if (err) {
            res.json({message: 'what\'s a stock?'});
        } else {
            res.json(data)
        }
    });
});


app.listen(port, () => { console.log('Listening on ' + port + '!!!'); });