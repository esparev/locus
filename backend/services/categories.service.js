const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

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
		const response = await models.Category.findAll();
		return response;
	}

	/**
	 * Encuentra la categoria con el id proporcionado
	 * @param {number} id - id de la categoria
	 * @returns {Object} - Objeto con la categoria
	 */
	async findOne(id) {
		const category = await models.Category.findByPk(id);

		if (!category) {
			throw boom.notFound('categoria no encontrada');
		}

		return category;
	}

	/**
	 * Crea una categoria con los datos proporcionados
	 * @param {*} data - datos de la categoria
	 * @returns {Object} - Objeto con la categoria creada
	 */
	async create(data) {
		const newCategory = await models.Category.create(data);
		return newCategory;
	}

	/**
	 * Actualiza parcialmente la categoria con el id proporcionado
	 * con los datos proporcionados
	 * @param {number} id - id de la categoria
	 * @param {*} changes - datos de la categoria
	 * @returns {Object} - Objeto con la categoria actualizada
	 * @throws {Error} - Error si no se encuentra la categoria
	 */
	async update(id, changes) {
		const category = await this.findOne(id);
		const response = await category.update(changes);
		return response;
	}

	/**
	 * Elimina la categoria con el id proporcionado
	 * @param {number} id - id de la categoria
	 * @returns {Object} - Objeto con la categoria eliminada
	 * @throws {Error} - Error si no se encuentra la categoria
	 */
	async delete(id) {
		const category = await this.findOne(id);
		await category.destroy();
		return { id };
	}
}

module.exports = CategoriesService;
