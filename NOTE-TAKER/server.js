var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 3001;
var fs = require("fs");

var rootObj = { root: __dirname };
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/*", (req, res) => {
    res.sendFile("/public/index.html", rootObj);
});
app.get("/notes", (req, res) => {
    res.sendFile("/public/notes.html", rootObj);
});
app.get("/api/notes", (req, res) => {
    console.log("/api/notesget");
    let json = getJson();
    console.log(json);
    res.json(json);
});
app.post("/api/notes", (req, res) => {
    console.log("/api/notes/:");
    console.log(req.body);
    addNoteToJSON(req.body);
    res.json(getJson());
});
app.delete("/api/notes/:id", (req, res) => {
    console.log("/api/notes/:iddelete");
    deleteNoteFromJSON(req.params.id);
    res.json(getJson());
});

app.listen(PORT, function() {
    console.log("Server is ready to listen on: http://localhost:" + PORT);
});

function getJson() {
    let data = fs.readFileSync(__dirname + "/db/db.json");
    let json = JSON.parse(data);
    return json;
}

function createNoteObject(data) {
    let obj = {
        title: data.title,
        text: data.text,
        complete: false,
        hidden: false,
    };
    return obj;
}

function addNoteToJSON(note) {
    let json = getJson();
    let newNote = createNoteobject(note);
    json.push(newNote);
    saveJSON(json);
}

function saveJSON(jsonData) {
    let data = JSON.stringify(jsonData);
    fs.writeFileSync(__dirname + "/db/db.json", data);
}

function deleteFileFromJSON(id) {
    let json = getJson();
    json[id].hide = true;
    saveJSON(json);
}