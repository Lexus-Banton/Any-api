const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { games } = require('../lib/game-data.js');

describe('game routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/game should return a list of games', async () => {
    const res = await request(app).get('/game');
    const expected = games.map((game) => {
      return {
        id: game.id,
        name: game.name,
        type: game.type,
        url: game.url,
        year: game.year,
        isMultiplayer: game.isMultiplayer,
      };
    });
    expect(res.body).toEqual(expected);
  });
});
