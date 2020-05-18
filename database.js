var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE Opportunity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number text,
            title text, 
            agency text, 
            status text, 
            posted Date,
            close Date
            )`,(err) => {
        if (err) {
            // Table already created
            console.log('Database created previosly.')
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO Opportunity (number, title, agency, status, posted, close) VALUES (?,?,?,?,?,?)'
            db.run(insert, ["20-578", "NSF-DFG Lead Agency Activity in Electrosynthesis and Electrocatalysis", "NSF", "Posted", "05/17/2020", "09/30/2020"])
            db.run(insert, ["20CS12", "VICTOR Curriculum Revision and E-Course Development", "USDOJ-BOP-NIC", "Posted", "05/15/2020", "07/14/2020"])
            console.log('Database created.')
        }
    })  
    }
})


module.exports = db