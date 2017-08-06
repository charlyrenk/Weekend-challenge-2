var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var amount = ""
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/calc', function (req, res) {
    console.log('message post was hit!')
    // send back calculated functions (req.body);  
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var type = req.body.type;

    if (type = "Add") {
        
        res.send(x + y + "")
    }
    if (type = "Subtract") {
        res.send(x - y + "")
    }
    if (type = "Multiply") {
        res.send(x * y + "")
    }
    if (type = "Divide") {
        res.send(x / y + "")
    }

    // calcObject (req.body);
    res.sendStatus(201);
    // res.send(x + y);
});

app.get('/calc', function (req, res) {
    res.send(amount);
});

app.listen(port, function () {
    console.log('listening on port', port);
});

// function calcObject() {
//     if (type = "Add"){
//         res.send (x + y)
//     }
//     if (type = "Subtract"){
//         res.send (x - y)
//     }
//     if (type = "Multiply"){
//         res.send (x * y)
//     }
//     if (type = "Divide"){
//         res.send (x / y)
//     }
// }