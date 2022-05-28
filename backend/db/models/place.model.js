const { Model, DataTypes } = require('sequelize');

// Nombre de la tabla de la base de datos
const PLACE_TABLE = 'place';

/**
 * @class Place
 * @description Modelo de la tabla 'place'
 * @extends {Model}
 * @property {number} id - Id del lugar
 * @property {string} name - Nombre del lugar
 * @property {string} slug - Slug del lugar
 * @property {string} description - Descripcion del lugar
 * @property {string} image - Imagen del lugar
 * @property {string} country - Pais del lugar
 * @property {string} city - Ciudad del lugar
 * @property {date} createdAt - Fecha de creacion del lugar
 * @property {number} rating - Calificacion del lugar
 * @property {number} dangerLevel - Nivel de peligro del lugar
 */
const PlaceSchema = {
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
	description: {
		allowNull: false,
		type: DataTypes.STRING(1000),
	},
	country: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	city: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	image: {
		allowNull: true,
		defaultValue: 'https://image.com',
		type: DataTypes.STRING,
	},
	createdAt: {
		allowNull: true,
		field: 'created_at',
		defaultValue: Sequelize.NOW,
		type: DataTypes.DATE,
	},
	rating: {
		allowNull: true,
		type: DataTypes.INTEGER,
	},
	dangerLevel: {
		allowNull: true,
		field: 'danger_level',
		type: DataTypes.INTEGER,
	},
};

class Place extends Model {
	static associate(models) {
		// Relacion de uno a muchos (1-N) entre lugar y categorias
		this.hasMany(models.Category, {
			as: 'categories',
			foreignKey: 'placeId',
		});
	}

	/**
	 * @param {*} sequelize - Instancia de Sequelize
	 * @property {any} sequelize - coneccion tipo ORM
	 * @property {string} tableName - Nombre de la tabla
	 * @property {string} modelName - Nombre del modelo
	 * @returns la configuración del modelo
	 */
	static config(sequelize) {
		return {
			sequelize,
			tableName: PLACE_TABLE,
			modelName: 'Place',
			timestamps: false,
		};
	}
}

module.exports = { PLACE_TABLE, PlaceSchema, Place };
