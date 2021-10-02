const PokemonRepository = require('../repositories/PokemonRepository');

class PokemonController {
  async show(request, response) {
    const { id } = request.params;

    const pokemon = await PokemonRepository.findById(id);

    response.json(pokemon);
  }

  async index(request, response) {
    const { orderBy } = request.query;

    const pokemons = await PokemonRepository.findAll(orderBy);

    response.json(pokemons);
  }

  async store(request, response) {
    const {
      name, url, description, category_id,
    } = request.body;

    if (!name) {
      response.status(400).json({
        error: 'Name is required',
      });
    }

    const pokemon = await PokemonRepository.create({
      name, url, description, category_id,
    });

    response.json(pokemon);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, url, description, category_id,
    } = request.body;

    const pokemonExists = await PokemonRepository.findById(id);

    if (!pokemonExists) {
      return response.status(404).send({
        error: 'pokemon not found',
      });
    }

    if (!name) {
      return response.status(400).send({
        error: 'name is required',
      });
    }

    if (!url) {
      return response.status(400).send({
        error: 'url is required',
      });
    }

    const pokemon = await PokemonRepository.update(id, {
      name, url, description, category_id,
    });

    response.json(pokemon);
  }

  async delete(request, response) {
    const { id } = request.params;

    await PokemonRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new PokemonController();
