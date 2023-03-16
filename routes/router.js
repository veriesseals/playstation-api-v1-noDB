const express = require('express');
const router = express.Router();
// -------------------------------------------------

// Path to handle static files within the router
// -------------------------------------------------
router.use(express.static('public'));

// // Create psGameRoutes Server will break until psGameRoutes is created created
// -------------------------------------------------
const psGameRoutes = require('./api/psGameRoutes');

// Create path that will point to jokeRoutes
// ---------------------------------------------
router.use('/psGames', psGameRoutes);

// Create Home Route
// ---------------------------------------------
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Playstation Games',
        name: 'Playstation Games Games HQ'
    })
});


// All Playstation Games games
// ------------------------------------------------------
router.get('/games', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/playstation/games');
    const data = await response.json();
    res.render('pages/games',
    { games: data });
});
// ------------------------------------------------------

// All Playstation Games Genre
// ------------------------------------------------------
router.get('/genre', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/playstation/games');
    const data = await response.json();
    res.render('pages/genre',
    { games: data });
});
// ------------------------------------------------------

// All Playstation Games Developers
// ------------------------------------------------------
router.get('/developers', async (req, res) => {
    const response = await fetch(`https://api.sampleapis.com/playstation/games`);
    const data = await response.json();
    res.render('pages/developers',
    { games: data });
});
// ------------------------------------------------------

// All Playstation Game Publishers
// ------------------------------------------------------
router.get('/publishers', async (req, res) => {
    const response = await fetch(`https://api.sampleapis.com/playstation/games`);
    const data = await response.json();
    res.render('pages/publishers',
    { games: data });
});
// ------------------------------------------------------

// All Playstation Game Release Dates
// ------------------------------------------------------
router.get('/releaseDates', async (req, res) => {
    const response = await fetch(`https://api.sampleapis.com/playstation/games`);
    const data = await response.json();
    res.render('pages/releaseDates',
    { games: data });
});
// ------------------------------------------------------

// Error Route
// ---------------------------------------------
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end();
    } else {
        res.send('<h1>404 Aweee Mane! This page does not exist for real!</h1>')
    }
})


// -------------------------------------------------
module.exports = router;