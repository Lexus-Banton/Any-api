const { Router } = require('express');
const Game = require('../models/games.js');

module.exports = Router().get('/', async (req, res) => {
  const allGames = await Game.getAll();

  res.json(allGames);
});
