const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notes);
});

app.post("/api/notes", function (req, res) {
    const newNotes = req.body;

    notes.push(newNotes);

    res.json(newNotes);

    fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes),
        function (err) {
          if (err) throw err;

          res.json(true);
        }
      );
    }
});    
