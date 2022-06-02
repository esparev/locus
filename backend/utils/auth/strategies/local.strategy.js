const { Strategy } = require('passport-local');
const UsersService = require('../../../services/users.service');
const service = new UsersService();

/**
 * Estrategia local de passportjs con varias validaciones
 * para proteger la cuenta del usuario
 */
const LocalStrategy = new Strategy(
	{
		usernameField: 'email',
		passwordField: 'password',
	},
	async (email, password, done) => {
		try {
			const user = await service.getUser(email, password);
			done(null, user);
		} catch (error) {
			done(error, false);
		}
	}
);

module.exports = LocalStrategy;
