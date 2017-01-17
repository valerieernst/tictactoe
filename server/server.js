const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

app.use(express.static(path.join(__dirname, 'client')));

app.listen(3000, function() {console.log('app listening on 3000')})