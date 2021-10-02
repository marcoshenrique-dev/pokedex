const db = require('../../database');

class PokemonRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const row = await db.query(`
    SELECT * FROM pokemons ORDER BY name ${direction}
    `);

    return row;
  }

  findById() {}

  create() {}

  delete() {}

  update() {}
}

module.exports = new PokemonRepository();
