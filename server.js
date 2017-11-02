var express = require('express')
var bodyParser = require("body-parser")
var app = express()

var path = require('path')

var PORT = process.env.PORT || 3000

var db = require("./models")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }))

app.use(express.static("public"))

//main route
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/rcGrid.html"))
})

////other routes in models
//require("./routes/friend-api-routes.js")(app)
//require("./routes/bet-api-routes.js")(app)

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log(`Risky Caterpillar listening on PORT ${PORT}`)
    })
})


