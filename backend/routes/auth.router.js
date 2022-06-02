const express = require('express');
const passport = require('passport');
const AuthService = require('../services/auth.service');

const router = express.Router();
const service = new AuthService();

/**
 * Ruta de login
 * Autentica via la estrategia local de passport sin una sesion
 * y firma un token JWT con la informacion necesaria del usuario
 * para definir su rol
 */
router.post(
	'/iniciar-sesion',
	passport.authenticate('local', { session: false }),
	async (req, res, next) => {
		try {
			const user = req.user;
			res.status(201).json(service.signToken(user));
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de recuperacion de contraseña
 * Envia un correo con el link para cambiar la contraseña
 */
router.post('/recuperar', async (req, res, next) => {
	try {
		const { email } = req.body;
		const response = await service.sendRecovery(email);
		res.json(response);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
