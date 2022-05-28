const { User, UserSchema } = require('./user.model');
const { Place, PlaceSchema } = require('./place.model');
const { Category, CategorySchema } = require('./category.model');

/**
 * Configura todos los modelos de la base de datos
 * para seguir las reglas de validación de Joi segun el esquema
 * @param {*} sequelize - Instancia de Sequelize
 */
function setupModels(sequelize) {
	User.init(UserSchema, User.config(sequelize));
	Place.init(PlaceSchema, Place.config(sequelize));
	Category.init(CategorySchema, Category.config(sequelize));

	// Iniciar las relaciones
	User.associate(sequelize.models);
	Place.associate(sequelize.models);
	Category.associate(sequelize.models);
}

module.exports = setupModels;
