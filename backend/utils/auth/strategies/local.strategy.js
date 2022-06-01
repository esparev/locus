const { Strategy } = require('passport-local');
const UsersService = require('../../../services/users.service');
const service = new UsersService();
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

/**
 * Estrategia local de passportjs con varias validaciones
 * para proteger la cuenta del usuario, desde validar la existencia
 * de un email hasta la comparacion de la contraseña proporcionada
 * con la contraseña almacenada
 */
const LocalStrategy = new Strategy(
	{
		usernameField: 'email',
		passwordField: 'password',
	},
	async (email, password, done) => {
		try {
      // Valida si existe un usuario con el email proporcionado
			const user = await service.findByEmail(email);
			if (!user) {
				done(boom.unauthorized(), false);
			}
      // Valida si la contraseña ingresada es igual a la contraseña almacenada
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				done(boom.unauthorized(), false);
			}
      // Elimina la contraseña del objeto de respuesta
			delete user.dataValues.password;
      // Finaliza la ejecucion de la funcion con el usuario encontrado
			done(null, user);
		} catch (error) {
			done(error, false);
		}
	}
);

module.exports = LocalStrategy;
