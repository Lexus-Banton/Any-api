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

  it('/anime/:id should return anime detail', async () => {
    const res = await request(app).get('/anime/1');
    const jojo = {
      id: '1',
      name: 'JoJo Bizarre Adventure',
      type: 'Adventure',
      url: 'https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure#/media/File:JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg',
      year: 1987,
      stillRunning: 'TRUE',
    };
  });
  afterAll(() => {
    pool.end();
  });
});
