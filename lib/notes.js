// DEPENDENCIES
const fs = require("fs");
const path = require("path");
// GET FUNCTIONS
    // Set query for title and text results
    function filterByQuery(query, notes) {
        let filteredResults = notes;
        if (query.title) {
            filteredResults = filteredResults.filter(
                (note) => note.title === query.title
            );
        }
        if (query.text) {
            filteredResults = filteredResults.filter(
                (note) => note.text === query.text
            );
        }
        return filteredResults;
    };
    // Identify notes by id
    function findById(id, notes) {
        const result = notes.filter((note) => note.id === id)[0];
        return result;
    };
// POST FUNCTIONS
    // Save incoming data to array and then pushing to db file
    function createNewNote(body, notes) {
        const note = body;
        notes.push(note);
        fs.writeFileSync(
            path.join(__dirname, '../data/db.json'),
            JSON.stringify({ notes }, null, 2)
        );
    return note;
    };
    // Validation of incoming data
    function validateNote(note) {
        if (!note.title || typeof note.title !== "string") {
          return false;
        }
        if (!note.text || typeof note.text !== "string") {
          return false;
        }
        return true;
    };
// MODULE EXPORTS
module.exports = {
    filterByQuery,
    findById,
    validateNote,
    createNewNote
};