const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});
router.post("/api/burgers/:id", function(req, res) {
    console.log(req);
    const id = req.params.id;
    burger.updateOne(["burger_name"], id, function() {
        res.redirect("/");
    });
});
module.exports = router;