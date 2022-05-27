const { Model, DataTypes } = require('sequelize');

// Nombre de la tabla de la base de datos
const USER_TABLE = 'user';

/**
 * @class User
 * @description Modelo de la tabla 'user'
 * @extends {Model}
 * @property {number} id - Id del usuario
 * @property {string} name - Nombre del usuario
 * @property {string} slug - Slug del usuario
 * @property {string} email - Email del usuario
 * @property {string} password - Contraseña del usuario
 * @property {string} role - Rol del usuario
 * @property {string} image - Imagen del usuario
 */
const UserSchema = {
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
	email: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING(100),
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	role: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	image: {
		allowNull: true,
		defaultValue: 'https://image.com',
		type: DataTypes.STRING,
	},
};

/**
 * @class User
 */
class User extends Model {
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
			tableName: USER_TABLE,
			modelName: 'User',
			timestamps: false,
		};
	}
}

module.exports = { USER_TABLE, UserSchema, User };
