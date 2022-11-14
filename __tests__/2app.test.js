const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('game routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/game should return a list of games', async () => {
    const res = await request(app).get('/game');
    expect(res.body).toMatchInlineSnapshot;
  });
});
