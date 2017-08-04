var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.post('/calc', function(req, res) {
	console.log('message post was hit!')
    res.sendStatus(201);
});

app.listen(port, function() {
	console.log('listening on port', port);
});
