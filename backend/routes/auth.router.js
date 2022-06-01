const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const router = express.Router();

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
			const payload = {
				// Asunto para identificar al usuario
				sub: user.id,
				// Permisos del usuario
				scope: user.role,
			};
			const token = jwt.sign(payload, config.jwtSecret);
			res.status(201).json({
				user,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
