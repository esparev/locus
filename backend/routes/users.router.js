const express = require('express');
const router = express.Router({ mergeParams: true });

// Ruta principal de usuarios
router.get('/', (req, res) => {
	const users = [];
	const { size } = req.query;
	const limit = size || 10;

	for (let i = 0; i < limit; i++) {
		users.push({
			name: `Usuario ${i}`,
		});
	}

	res.json(users);
});

// Ruta de usuario por id
router.get('/:id', (req, res) => {
	const user = {};
	res.json(user);
});

// Ruta de creación de usuario
router.post('/', (req, res) => {
	const body = req.body;
	res.json({ data: body, message: 'Usuario creado' });
});

// Ruta de actualización de usuario
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ id, message: 'Usuario actualizado' });
});

// Ruta de eliminación de usuario
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ id, message: 'Usuario eliminado' });
});

module.exports = router;
