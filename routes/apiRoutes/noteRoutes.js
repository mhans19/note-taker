// DEPENDENCIES
const router = require("express").Router(); // Express Routers
const { filterByQuery, findById, validateNote, createNewNote } = require("../../lib/notes"); // GET/POST functions
const { notes } = require("../../db/db"); // json housing data
// GET/POST ROUTES
    // GET ROUTES
    // Filter Query GET
    router.get("/notes", (req, res) => {
        let results = notes;
        if (req.query) {
            results = filterByQuery(req.query, results);
        }
        res.json(results);
    });
    // Filter by ID GET
    router.get("/notes/:id", (req, res) => {
        const result = findById(req.params.id, notes);
        if (result) {
            res.json(result);
        } else {
            res.send(404);
        }
    });
    // POST ROUTES
    router.post("/notes", (req,res) => {
        req.body.id = notes.length.toString();
        if (!validateNote(req.body)) {
            res.status(400).send("The note is not properly formatted.");
        } else {
            const note = createNewNote(req.body, notes);
            res.json(note);
        }
    });
// MODULE EXPORTS
module.exports = router;