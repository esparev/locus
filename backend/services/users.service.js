const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Capa de servicio con métodos CRUD
 */
class UsersService {
	constructor() {}

	/**
	 * Encuentra todos los usuarios en el array de objetos
	 * @returns {Array} - Array con todos los usuarios
	 */
	async find() {
		const response = await models.User.findAll();
		return response;
	}

	/**
	 * Encuentra el usuario con el id proporcionado
	 * @param {number} id - id del usuario
	 * @returns {Object} - Objeto con el usuario
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Crea un usuario con los datos proporcionados
	 * @param {*} data - datos del usuario
	 * @returns {Object} - Objeto con el usuario creado
	 */
	async create(data) {
		return data;
	}

	/**
	 * Actualiza parcialmente el usuario con el id proporcionado
	 * con los datos proporcionados
	 * @param {number} id - id del usuario
	 * @param {*} changes - datos del usuario
	 * @returns {Object} - Objeto con el usuario actualizado
	 * @throws {Error} - Error si no se encuentra el usuario
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Elimina el usuario con el id proporcionado
	 * @param {number} id - id del usuario
	 * @returns {Object} - Objeto con el usuario eliminado
	 * @throws {Error} - Error si no se encuentra el usuario
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = UsersService;
