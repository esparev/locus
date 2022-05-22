const express = require('express');
const CategoriesService = require('./services/categories.service');

const router = express.Router();
const service = new CategoriesService();

/**
 * Ruta principal de categorías
 * @api {get} /categories Listar categorías
 * @apiName ListarCategorías
 * @apiGroup Categorías
 * @apiSuccess {Object[]} Lista de categorías
 */
router.get('/', async (req, res, next) => {
	try {
		const categories = await service.find();
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de categoría por id
 * @api {get} /categories/:id Obtener categoría
 * @apiName ObtenerCategoría
 * @apiGroup Categorías
 * @apiSuccess {Object} Categoría obtenida
 */
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const category = await service.findOne(id);
		res.status(200).json(category);
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de creación de categoría
 * @api {post} /categories Crear categoría
 * @apiName CrearCategoría
 * @apiGroup Categorías
 * @apiSuccess {Object} Categoría creada
 */
router.post('/', async (req, res) => {
	const body = req.body;
	const newCategory = await service.create(body);
	res
		.status(201)
		.json({ data: body, newCategory, message: 'categoria creada' });
});

/**
 * Ruta de actualización de categoría
 * @api {patch} /categories/:id Actualizar categoría
 * @apiName ActualizarCategoría
 * @apiGroup Categorías
 * @apiSuccess {Object} Categoría actualizada
 */
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const updatedCategory = await service.update(id, body);
		res.status(200).json({
			id,
			data: body,
			updatedCategory,
			message: 'categoria actualizada',
		});
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de eliminación de categoría
 * @api {delete} /categories/:id Eliminar categoría
 * @apiName EliminarCategoría
 * @apiGroup Categorías
 * @apiSuccess {Object} Categoría eliminada
 */
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedCategory = await service.delete(id);
		res
			.status(200)
			.json({ id, deletedCategory, message: 'categoria eliminada' });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
