const express = require('express');
const app = express();

const userRoutes = require('./routes/routes.js');
const pokemonRoutes = require('./routes/pokemon.route.js');

app.use(express.json());

app.use('/user', userRoutes);
app.use('/pokemon', pokemonRoutes);

module.exports = app;  
