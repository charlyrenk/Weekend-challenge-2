var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var calcObject = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.post('/calc', function(req, res) {
    console.log('message post was hit!')
    calcObject.push(req.body);
    console.log(calcObject)
    res.sendStatus(201);
});

app.listen(port, function() {
	console.log('listening on port', port);
});
