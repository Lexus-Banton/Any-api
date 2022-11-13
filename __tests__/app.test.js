const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Anime = require('../lib/controllers/anime.js');

describe('anime routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/anime should return a list of anime', async () => {
    const res = await request(app).get('/anime');
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "JoJo Bizarre Adventure",
        },
        Object {
          "id": "2",
          "name": "Sailor Moon",
        },
        Object {
          "id": "3",
          "name": "Macross Frontier",
        },
        Object {
          "id": "4",
          "name": "Dragon Ball",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
