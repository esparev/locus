const express = require('express');
const router = express.Router({ mergeParams: true });

// Ruta principal de lugares
router.get('/', (req, res) => {
	const places = [];
	const { size } = req.query;
	const limit = size || 10;

	for (let i = 0; i < limit; i++) {
		places.push({
			name: `Lugar ${i}`,
		});
	}

	res.json(places);
});

// Ruta de lugar por id
router.get('/:id', (req, res) => {
	const place = {};
	res.json(place);
});

// Ruta de creación de lugar
router.post('/', (req, res) => {
	const body = req.body;
	res.json({ data: body, message: 'Lugar creado' });
});

// Ruta de actualización de lugar
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ id, message: 'Lugar actualizado' });
});

// Ruta de eliminación de lugar
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ id, message: 'Lugar eliminado' });
});

module.exports = router;
