const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Capa de servicio con métodos CRUD
 */
class PlacesService {
	constructor() {}

	/**
	 * Encuentra todos los lugares en el array de objetos
	 * @returns {Array} - Array con todos los lugares
	 */
	async find() {
		const response = await models.Place.findAll();
		return response;
	}

	/**
	 * Encuentra el lugar con el id proporcionado
	 * @param {number} id - id del lugar
	 * @returns {Object} - Objeto con el lugar
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Crea un lugar con los datos proporcionados
	 * @param {*} data - datos del lugar
	 * @returns {Object} - Objeto con el lugar creado
	 */
	async create(data) {
		return data;
	}

	/**
	 * Actualiza parcialmente el lugar con el id proporcionado
	 * con los datos proporcionados
	 * @param {number} id - id del lugar
	 * @param {*} changes - datos del lugar
	 * @returns {Object} - Objeto con el lugar actualizado
	 * @throws {Error} - Error si no se encuentra el lugar
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Elimina el lugar con el id proporcionado
	 * @param {number} id - id del lugar
	 * @returns {Object} - Objeto con el lugar eliminado
	 * @throws {Error} - Error si no se encuentra el lugar
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = PlacesService;
