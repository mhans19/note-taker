// DEPENDENCIES
const router = require("express").Router(); // Express Routers
const { findById, validateNote, createNewNote } = require("../../lib/notes"); // GET/POST functions
const db = require("../../db/db"); // json housing data
const { fs } = require("fs");
const notes = require("../../lib/notes");
// GET/POST ROUTES
    // GET ROUTES
    // Filter Query GET
    router.get("/notes", (req, res) => {
        let results = db;
        res.json(results);
    });
    // POST ROUTES
    router.post("/notes", (req, res) => {
        req.body.id = db.length.toString();
        if (!validateNote(req.body)) {
            res.status(400).send("The note is not properly formatted.");
        } else {
            const note = createNewNote(req.body, db);
            res.json(note);
        }
    });
    // Filter by ID to Delete object
    // router.delete("/notes/:id", (req, res) => {
    //     db.splice(req.params.id, 1);
    // });
// MODULE EXPORTS
module.exports = router;