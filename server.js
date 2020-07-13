// DEPENDENCIES 
    // Add PORT listener & link for Routes
    const express = require('express');
    const apiRoutes = require('./routes/apiRoutes');
    const htmlRoutes = require('./routes/htmlRoutes');
    const PORT = process.env.PORT || 3001;
    const app = express();
// MIDDLEWARE
    // Parse incoming string or array data
    app.use(express.urlencoded({ extended:true }));
    // Parse incoming JSON data
    app.use(express.json());
    // Serve back HTML Routes
    app.use('/api', apiRoutes);
    app.use('/', htmlRoutes);
    app.use('/notes', htmlRoutes);
    // GET request for all file dependecies in the front-end (public) folder (e.g., css and js files)
    app.use(express.static('public'));
// PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});