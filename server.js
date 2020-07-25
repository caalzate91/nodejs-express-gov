var express = require("express")
var app = express()
var db = require("./database.js")

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var HTTP_PORT = 8080

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
})

app.get("/api/opportunities", (req, res, next) => {
    var sql = "select * from Opportunity"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message})
          return
        }
        res.json({
            "message":"success",
            "data":rows
        })
      })
})


app.get("/api/opportunity/:number", (req, res, next) => {
    var sql = "select * from Opportunity where number = ?"
    var params = [req.params.number]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message})
          return
        }
        res.json({
            "message":"success",
            "data":row
        })
      })
})


app.post("/api/opportunity/", (req, res, next) => {
    var errors=[]
    if (!req.body.number){
        errors.push("No number specified")
    }
    if (!req.body.title){
        errors.push("No title specified")
    }
    if (!req.body.agency){
        errors.push("No agency specified")
    }
    if (!req.body.status){
        errors.push("No status specified")
    }
    if (!req.body.posted){
        errors.push("No posted date specified")
    }
    if (!req.body.close){
        errors.push("No close date specified")
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")})
        return
    }
    var data = {
        number: req.body.number,
        title: req.body.title,
        agency: req.body.agency,
        status: req.body.status,
        posted: req.body.posted,
        close: req.body.close
    }
    var sql ='INSERT INTO Opportunity (number, title, agency, status, posted, close) VALUES (?,?,?,?,?,?)'
    var params =[data.number, data.title, data.agency, data.status, data.posted, data.close]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    })
})



app.patch("/api/opportunity/:id", (req, res, next) => {
    var data = {
        number: req.body.number,
        title: req.body.title,
        agency: req.body.agency,
        status: req.body.status,
        posted: req.body.posted,
        close: req.body.close
    }
    db.run(
        `UPDATE Opportunity set 
            number = coalesce(?,number), 
            title = COALESCE(?,title), 
            agency = coalesce(?,agency),
            status = coalesce(?,status),
            posted = coalesce(?,posted),
            close = coalesce(?,close),
           WHERE id = ?`,
        [data.number, data.title, data.agency, data.status, data.posted, data.close, req.params.id],
        (err, result) => {
            if (err){
                res.status(400).json({"error": res.message})
                return
            }
            res.json({
                message: "success",
                data: data
            })
    })
})


app.delete("/api/opportunity/:id", (req, res, next) => {
    db.run(
        'DELETE FROM Opportunity WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return
            }
            res.json({"message":"deleted", rows: this.changes})
    })
})


// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok GDG Medellin.!"})
})
