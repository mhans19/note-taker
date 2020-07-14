// DEPENDENCIES
const router = require("express").Router(); // Express Routers
const { findById, validateNote, createNewNote } = require("../../lib/notes"); // GET/POST functions
const notes = require("../../db/db"); // json housing data
const fs = require("fs");
const path = require("path");
const shortid = require('shortid');

// GET/POST ROUTES
    // GET ROUTES
    // Filter Query GET
    router.get("/notes", (req, res) => {
        let results = notes;
        res.json(results);
    });
    // POST ROUTES
    router.post("/notes", (req, res) => {
        req.body.id = shortid.generate();
        if (!validateNote(req.body)) {
            res.status(400).send("The note is not properly formatted.");
        } else {
            const note = createNewNote(req.body, notes);
            res.json(note);
        }
    });
    // Filter by ID to Delete object
    router.delete("/notes/:id", (req, res) => {
        // ID of note
        const result = findById(req.params.id, notes);
        if (result) {
          res.json(result);
        } else {
          res.send(404);
        };
        // Delete based on matching IDs
        for (var i = 0; i < notes.length; i++) {
            var obj = notes[i];
            if (result.id === obj.id) {
                notes.splice(i, 1);
            }
        // Write back to db    
        };
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(notes, null, 2)
        );
    });

// MODULE EXPORTS
module.exports = router;