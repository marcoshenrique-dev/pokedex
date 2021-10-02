const { Router } = require('express');

const PokemonController = require('./app/controllers/PokemonController');
const CategoriesController = require('./app/controllers/CategoriesController');

const router = Router();

// Pokemons -> Routes

router.get('/pokemon', PokemonController.index);
router.get('/pokemon/:id', PokemonController.show);
router.post('/pokemon', PokemonController.create);
router.put('/pokemon/:id', PokemonController.update);
router.delete('/pokemon/:id', PokemonController.delete);

// Categories -> Routes

router.post('/category', PokemonController.create);
router.put('/category/:id', PokemonController.update);
router.delete('/category/:id', PokemonController.delete);
router.get('/category', PokemonController.index);

// Pokemons - Categories -> Routes

router.get('/pokemon/categories/:id', CategoriesController.show);

module.exports = router;
