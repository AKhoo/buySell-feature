const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());


app.listen(port, () => { console.log('Listening on ' + port + '!!!'); });