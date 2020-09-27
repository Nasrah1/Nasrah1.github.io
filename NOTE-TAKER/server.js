var express = require("express");
var app = express();
var path = require("path");
// Defines a port to listen for requests
var PORT = process.env.PORT || 3001;
var fs = require("fs");
let db = require("./db/db.json");

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Get Methods
app.get("/assets/js/index.js"),
    function(req, res) {
        res.sendFile(path.join(__dirname, "public/assets/index.js"));
    };

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    return res.json(notes);
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

let notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "/db/db.json"), (err, data) => {
        if (err) {
            throw err;
        }
    })
);

var writeNewNote = function(note) {
    fs.writeFileSync(
        path.join(__dirname, "/db/db.json"),
        JSON.stringify(note),
        (err, data) => {
            if (err) {
                throw err;
            }
        }
    );
};

//Post Method here
app.post("/api/notes", function(req, res) {
    // Receives a new note, adds it to db.json, then returns the new note
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: " + newNote.title);
});

app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id " + req.params.id);
});

app.listen(PORT, function() {
    console.log("Server is ready to listen on: http://localhost:" + PORT);
});