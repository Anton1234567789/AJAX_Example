const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('files'));
app.use(express.static('bower_components'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve("./files/index.html"));
});

app.post('/sum', (req, res) => {
  var a = +req.body.a;
  var b = +req.body.b;
  res.end(a + b + "");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
