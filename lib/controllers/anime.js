const { Router } = require('express');
const animes = require('../models/animes.js');

module.exports = Router().get('/', async (req, res) => {
  const anime = await animes.getAll();
  const filtered = anime.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
