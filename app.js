var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.post('/calc', function(req, res) {
    console.log('message post was hit!')
    // send back calculated functions (req.body);  
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var type = req.body.type;
    console.log(x + y);
    res.sendStatus(201);
});

app.listen(port, function() {
	console.log('listening on port', port);
});


