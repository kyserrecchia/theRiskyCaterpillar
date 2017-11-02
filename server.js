var express = require('express')
var bodyParser = require("body-parser");
var app = express()

var path = require('path')

var PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/rcGrid.html"))
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})

