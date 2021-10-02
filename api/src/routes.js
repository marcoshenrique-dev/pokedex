const { Router } = require('express');

const PokemonController = require('./app/controllers/PokemonController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

// Pokemons -> Routes

router.get('/pokemon', PokemonController.index);
router.get('/pokemon/:id', PokemonController.show);
router.post('/pokemon', PokemonController.store);
router.put('/pokemon/:id', PokemonController.update);
router.delete('/pokemon/:id', PokemonController.delete);

// Categories -> Routes

router.post('/category', CategoryController.store);
router.put('/category/:id', CategoryController.update);
router.delete('/category/:id', CategoryController.delete);
router.get('/category', CategoryController.index);

// Pokemons - Categories -> Routes

router.get('/pokemon/categories/:id', CategoryController.show);

module.exports = router;
