const { User, UserSchema } = require('./user.model');

/**
 * Configura todos los modelos de la base de datos
 * para seguir las reglas de validación de Joi segun el esquema
 * @param {*} sequelize - Instancia de Sequelize
 */
function setupModels(sequelize) {
	User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
