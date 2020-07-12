// DEPENDENCIES
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');
// LINK
router.use(noteRoutes);
// EXPORT MODULE
module.exports = router;