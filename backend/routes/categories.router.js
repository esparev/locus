const express = require('express');
const CategoriesService = require('./services/categories.service');

const router = express.Router({ mergeParams: true });
const service = new CategoriesService();

// Ruta principal de categorías
router.get('/', (req, res) => {
	const categories = service.find();
	res.status(200).json(categories);
});

// Ruta de categoría por id
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const category = service.findOne(id);
	res.status(200).json(category);
});

// Ruta de creación de categoría
router.post('/', (req, res) => {
	const body = req.body;
	const newCategory = service.create(body);
	res
		.status(201)
		.json({ data: body, newCategory, message: 'categoria creada' });
});

// Ruta de actualización de categoría
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const updatedCategory = service.update(id, body);
	res.status(200).json({
		id,
		data: body,
		updatedCategory,
		message: 'categoria actualizada',
	});
});

// Ruta de eliminación de categoría
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const deletedCategory = service.delete(id);
	res.status(200).json({ id, deletedCategory, message: 'categoria eliminada' });
});

module.exports = router;
