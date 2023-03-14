const express = require('express');
const server = express();
const router = require('./routes/router')
const PORT = process.envPORT || 3000;


// PORT Listener
server.listen(PORT, ()=> console.log(`This PORT ${PORT} is jumpin right now!`))