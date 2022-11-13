const { Router } = require('express');
const Anime = require('../models/animes.js');

module.exports = Router().get('/', async (req, res) => {
  const allAnimes = await Anime.getAll();
  const filteredAnimes = allAnimes.map(({ id, name }) => ({ id, name }));
  res.json(filteredAnimes);
});
