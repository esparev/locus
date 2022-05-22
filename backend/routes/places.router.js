const express = require('express');
const PlacesService = require('./services/places.service');

const router = express.Router();
const service = new PlacesService();

/**
 * Ruta principal de lugares
 * @api {get} /places Listar lugares
 * @apiName ListarLugares
 * @apiGroup Lugares
 * @apiSuccess {Object[]} Lista de lugares
 */
router.get('/', async (req, res, next) => {
	try {
		const places = await service.find();
		res.json(places);
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de lugar por id
 * @api {get} /places/:id Obtener lugar
 * @apiName ObtenerLugar
 * @apiGroup Lugares
 * @apiSuccess {Object} Lugar obtenido
 */
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const place = await service.findOne(id);
		res.status(200).json(place);
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de creación de lugar
 * @api {post} /places Crear lugar
 * @apiName CrearLugar
 * @apiGroup Lugares
 * @apiSuccess {Object} Lugar creado
 */
router.post('/', async (req, res) => {
	const body = req.body;
	const newPlace = await service.create(body);
	res.status(201).json({ data: body, newPlace, message: 'lugar creado' });
});

/**
 * Ruta de actualización de lugar
 * @api {patch} /places/:id Actualizar lugar
 * @apiName ActualizarLugar
 * @apiGroup Lugares
 * @apiSuccess {Object} Lugar actualizado
 */
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const updatedPlace = await service.update(id, body);
		res
			.status(200)
			.json({ id, data: body, updatedPlace, message: 'lugar actualizado' });
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de eliminación de lugar
 * @api {delete} /places/:id Eliminar lugar
 * @apiName EliminarLugar
 * @apiGroup Lugares
 * @apiSuccess {Object} Lugar eliminado
 */
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedPlace = await service.delete(id);
		res.status(200).json({ id, deletedPlace, message: 'lugar eliminado' });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
