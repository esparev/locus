const express = require('express');
const PlacesService = require('./services/places.service');

const router = express.Router({ mergeParams: true });
const service = new PlacesService();

// Ruta principal de lugares
router.get('/', async (req, res) => {
	const places = await service.find();
	res.json(places);
});

// Ruta de lugar por id
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const place = await service.findOne(id);
	res.status(200).json(place);
});

// Ruta de creación de lugar
router.post('/', async (req, res) => {
	const body = req.body;
	const newPlace = await service.create(body);
	res.status(201).json({ data: body, newPlace, message: 'lugar creado' });
});

// Ruta de actualización de lugar
router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const updatedPlace = await service.update(id, body);
	res
		.status(200)
		.json({ id, data: body, updatedPlace, message: 'lugar actualizado' });
});

// Ruta de eliminación de lugar
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deletedPlace = await service.delete(id);
	res.status(200).json({ id, deletedPlace, message: 'lugar eliminado' });
});

module.exports = router;
