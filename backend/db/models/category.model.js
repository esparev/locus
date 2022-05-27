const { Model, DataTypes } = require('sequelize');
const { PLACE_TABLE } = require('./place.model');

// Nombre de la tabla de la base de datos
const CATEGORY_TABLE = 'category';
const { PLACE_TABLE } = require('./place.model');

/**
 * @class Category
 * @description Modelo de la tabla 'category'
 * @extends {Model}
 * @property {number} id - Id de la categoria
 * @property {string} slug - Slug de la categoria
 * @property {string} name - Nombre de la categoria
 */
const CategorySchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	slug: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	placeId: {
		allowNull: false,
		field: 'place_id',
		unique: true,
		type: DataTypes.INTEGER,
		references: {
			model: PLACE_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

/**
 * @class Category
 */
class Category extends Model {
	/**
	 *
	 * @param {*} sequelize - Instancia de Sequelize
	 * @property {any} sequelize - coneccion tipo ORM
	 * @property {string} tableName - Nombre de la tabla
	 * @property {string} modelName - Nombre del modelo
	 * @returns la configuracion del modelo
	 */
	static config(sequelize) {
		return {
			sequelize,
			tableName: CATEGORY_TABLE,
			modelName: 'Category',
			timestamps: false,
		};
	}
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
