const pool = require('../utils/pool.js');
class Game {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
  }
  static async getAll() {
    const { rows } = await pool.query(' SELECT * from games');
    return rows.map((gameRow) => new Game(gameRow));
  }

  static async getbyId(id) {
    const { rows } = await pool.query('Select * from games WHERE id =$1', [id]);
    return new Game(rows[0]);
  }
}

module.exports = Game;
