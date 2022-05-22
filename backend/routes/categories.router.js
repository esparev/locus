const express = require('express');
const router = express.Router({ mergeParams: true });

// Ruta principal de categorías
router.get('/', (req, res) => {
	const categories = [];
	const { size } = req.query;
	const limit = size || 10;

	for (let i = 0; i < limit; i++) {
		categories.push({
			name: `Categoria ${i}`,
		});
	}

	res.status(200).json(categories);
});

// Ruta de categoría por id
router.get('/:id', (req, res) => {
	const category = {};
	res.status(200).json(category);
});

// Ruta de creación de categoría
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({ data: body, message: 'Categoria creada' });
});

// Ruta de actualización de categoría
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({ id, message: 'Categoria actualizada' });
});

// Ruta de eliminación de categoría
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({ id, message: 'Categoria eliminada' });
});

module.exports = router;
