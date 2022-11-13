const pool = require('../utils/pool.js');
class Anime {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.stillRunning = row.still_running;
  }
  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from anime`);
    return rows.map((animeRow) => new Anime(animeRow));
  }

  // static async getbyId(id) {
  //   const { rows } = await pool.query('Select * from anime WHERE id =$1', [id]);
  //   return new anime(rows[0]);
  // }
}

module.exports = Anime;
