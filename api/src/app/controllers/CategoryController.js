const CategoryRepository = require('../repositories/CategoryRepository');

class CategoriesController {
  show() {}

  async index(request, response) {
    const { orderBy } = request.query;

    const categories = await CategoryRepository.findAll(orderBy);

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).send({
        error: 'pokemon not found',
      });
    }

    if (!name) {
      return response.status(400).send({
        error: 'name is required',
      });
    }

    const category = await CategoryRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoryRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoriesController();
