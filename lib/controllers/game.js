const { Router } = require('express');
const Game = require('../models/games.js');

module.exports = Router().get('/', async (req, res) => {
  const allGames = await Game.getAll();
  const filteredGames = allGames.map(({ id, name }) => ({ id, name }));
  res.json(filteredGames);
});
