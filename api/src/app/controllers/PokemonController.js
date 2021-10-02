const PokemonRepository = require('../repositories/PokemonRepository');

class PokemonController {
  show() {}

  async index(request, response) {
    const { orderBy } = request.query;

    const pokemons = await PokemonRepository.findAll(orderBy);

    response.json(pokemons);
  }

  store() {}

  update() {}

  delete() {}
}

module.exports = new PokemonController();
