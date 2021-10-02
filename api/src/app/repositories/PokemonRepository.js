const db = require('../../database');

class PokemonRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const row = await db.query(`
    SELECT * FROM pokemons ORDER BY name ${direction}
    `);

    return row;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT * FROM pokemons WHERE id = $1
    `, [id]);
    return row;
  }

  async create({
    name, url, description, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO pokemons(name, url, description, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `, [name, url, description, category_id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
    DELETE FROM pokemons WHERE id = $1
    `, [id]);

    return deleteOp;
  }

  async update(id, {
    name, url, description, category_id,
  }) {
    const [row] = await db.query(`
    UPDATE pokemons
    SET name = $1, url = $2, description = $3, category_id = $4
    WHERE id = $5
    RETURNING *
    `, [name, url, description, category_id, id]);

    return row;
  }
}

module.exports = new PokemonRepository();
