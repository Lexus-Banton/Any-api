const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { anime } = require('../lib/anime.data.js');

describe('anime routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/anime should return a list of anime', async () => {
    const res = await request(app).get('/anime');
    const expected = anime.map((anime) => {
      return { id: anime.id, name: anime.name };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
