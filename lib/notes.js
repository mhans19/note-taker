// DEPENDENCIES
const fs = require("fs");
const path = require("path");
// FUNCTIONS
    // Identify notes by id
    function findById(id, noteObject) {
        const result = noteObject.filter((note) => note.id === id)[0];
        return result;
    };
    // Save incoming data to array and then pushing to db file
    function createNewNote(body, noteObject) {
        const note = body;
        noteObject.push(note);
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(noteObject, null, 2)
        );
    return note;
    };
    // Validation of incoming data
    function validateNote(noteObject) {
        if (!noteObject.title || typeof noteObject.title !== "string") {
          return false;
        }
        if (!noteObject.text || typeof noteObject.text !== "string") {
          return false;
        }
        return true;
    };
// MODULE EXPORTS
module.exports = {
    findById,
    validateNote,
    createNewNote
};