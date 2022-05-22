const express = require('express');
const UsersService = require('./services/users.service');

const router = express.Router({ mergeParams: true });
const service = new UsersService();

// Ruta principal de usuarios
router.get('/', async (req, res) => {
	const users = await service.find();
	res.status(200).json(users);
});

// Ruta de usuario por id
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const user = await service.findOne(id);
	res.status(200).json(user);
});

// Ruta de creación de usuario
router.post('/', async (req, res) => {
	const body = req.body;
	const newUser = await service.create(body);
	res.status(201).json({ data: body, newUser, message: 'usuario creado' });
});

// Ruta de actualización de usuario
router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const updatedUser = await service.update(id, body);
	res
		.status(200)
		.json({ id, data: body, updatedUser, message: 'usuario actualizado' });
});

// Ruta de eliminación de usuario
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deletedUser = await service.delete(id);
	res.status(200).json({ id, deletedUser, message: 'usuario eliminado' });
});

module.exports = router;
