const { Router } = require('express');
const Game = require('../models/games.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const allGames = await Game.getAll();

    res.json(allGames);
  })
  .get('/:id', async (req, res) => {
    const gameDetail = await Game.getbyId(req.params.id);
    res.json(gameDetail);
  });
