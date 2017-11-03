var db = require("../models")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        db.Friend.findAll().then(function (dbFriend) {
            res.json(dbFriend)
        })
    })

    //app.get("/api/friend/:id", function (req, res) {
    //    db.Friend.findOne({
    //        where: {
    //            id: req.params.id
    //        }
    //    }).then(function (dbFriend) {
    //        res.json(dbFriend);
    //    })
    //})

    //app.post("/api/authors", function (req, res) {
    //    db.Author.create(req.body).then(function (dbAuthor) {
    //        res.json(dbAuthor);
    //    })
    //})

    //app.delete("/api/authors/:id", function (req, res) {
    //    db.Author.destroy({
    //        where: {
    //            id: req.params.id
    //        }
    //    }).then(function (dbAuthor) {
    //        res.json(dbAuthor);
    //    })
    //})

}