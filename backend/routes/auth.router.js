const express = require('express');
const passport = require('passport');
const router = express.Router();

/**
 * Login route
 * Ruta de login
 * Autentica via la estrategia local de passport sin una sesion
 */
router.post(
	'/iniciar-sesion',
	passport.authenticate('local', { session: false }),
	async (req, res, next) => {
		try {
			res.status(201).json(req.user);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
