// DEPENDENCIES
const path = require('path');
const router = require('express').Router();
// ROUTES
    // Front-end, HTML files (public folder)
    router.get('/', (req, res) => {
        res.sendFile(path.join(_dirname, '../../public/index.html'));
    });
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../../public/notes.html'));
    });
// MODULE EXPORTS
    module.exports = router;