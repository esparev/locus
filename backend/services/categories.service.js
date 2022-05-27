const boom = require('@hapi/boom');

/**
 * Capa de servicio con métodos CRUD
 */
class CategoriesService {
	constructor() {}

	/**
	 * Encuentra todas las categorias en el array de objetos
	 * @returns {Array} - Array con todas las categorias
	 */
	async find() {
		return [];
	}

	/**
	 * Encuentra la categoria con el id proporcionado
	 * @param {*} id - id de la categoria
	 * @returns {Object} - Objeto con la categoria
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Crea una categoria con los datos proporcionados
	 * @param {*} data - datos de la categoria
	 * @returns {Object} - Objeto con la categoria creada
	 */
	async create(data) {
		return data;
	}

	/**
	 * Actualiza parcialmente la categoria con el id proporcionado
	 * con los datos proporcionados
	 * @param {*} id - id de la categoria
	 * @param {*} changes - datos de la categoria
	 * @returns {Object} - Objeto con la categoria actualizada
	 * @throws {Error} - Error si no se encuentra la categoria
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Elimina la categoria con el id proporcionado
	 * @param {*} id - id de la categoria
	 * @returns {Object} - Objeto con la categoria eliminada
	 * @throws {Error} - Error si no se encuentra la categoria
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = CategoriesService;
