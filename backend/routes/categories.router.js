const express = require('express');
const CategoriesService = require('./services/categories.service');

const router = express.Router({ mergeParams: true });
const service = new CategoriesService();

// Ruta principal de categorías
router.get('/', async (req, res) => {
	const categories = await service.find();
	res.status(200).json(categories);
});

// Ruta de categoría por id
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const category = await service.findOne(id);
	res.status(200).json(category);
});

// Ruta de creación de categoría
router.post('/', async (req, res) => {
	const body = req.body;
	const newCategory = await service.create(body);
	res
		.status(201)
		.json({ data: body, newCategory, message: 'categoria creada' });
});

// Ruta de actualización de categoría
router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const updatedCategory = await service.update(id, body);
	res.status(200).json({
		id,
		data: body,
		updatedCategory,
		message: 'categoria actualizada',
	});
});

// Ruta de eliminación de categoría
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deletedCategory = await service.delete(id);
	res.status(200).json({ id, deletedCategory, message: 'categoria eliminada' });
});

module.exports = router;
