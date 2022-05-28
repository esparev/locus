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
		const places = await models.Place.findAll();
		return places;
	}

	/**
	 * Encuentra el lugar con el id proporcionado
	 * @param {number} id - id del lugar
	 * @returns {Object} - Objeto con el lugar
	 */
	async findOne(id) {
		const place = await models.Place.findByPk(id);

		if (!place) {
			throw boom.notFound('lugar no encontrado');
		}

		return place;
	}

	/**
	 * Crea un lugar con los datos proporcionados
	 * @param {*} data - datos del lugar
	 * @returns {Object} - Objeto con el lugar creado
	 */
	async create(data) {
		const newPlace = await models.Place.create(data);
		return newPlace;
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
		const place = await this.findOne(id);
		const response = await place.update(changes);
		return response;
	}

	/**
	 * Elimina el lugar con el id proporcionado
	 * @param {number} id - id del lugar
	 * @returns {Object} - Objeto con el lugar eliminado
	 * @throws {Error} - Error si no se encuentra el lugar
	 */
	async delete(id) {
		const place = await this.findOne(id);
		await place.destroy();
		return { id };
	}
}

module.exports = PlacesService;
