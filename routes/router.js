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
        name: 'Games HQ'
    })
});

// Create All Games Route
// ---------------------------------------------
router.get('/allGames', (req, res)=> {
    res.render('pages/allGames', {
        title: 'All Games',
        name: 'All Games',
        genre: 'All Genres'
    })
});

// Create All Genre Route
// ---------------------------------------------
router.get('/gameGenre', (req, res)=> {
    res.render('pages/gameGenre', {
        title: 'Genre',
        name: 'Genre',
        genre: 'All Genres'
    })
});

// Error Route
// ---------------------------------------------
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end();
    } else {
        res.send('<h1>404 Aweee Mane! This page does not exist for real!</h1>', '<img src="" alt="Girl in a jacket" width="500" height="600"></img>')
    }
})


// -------------------------------------------------
module.exports = router;