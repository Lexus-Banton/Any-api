const pool = require('../utils/pool.js');
class Game {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.isMultiplayer = row.is_multiplayer;
  }
  static async getAll() {
    const { rows } = await pool.query(' SELECT * from game');
    return rows.map((gameRow) => new Game(gameRow));
  }
}

module.exports = Game;
