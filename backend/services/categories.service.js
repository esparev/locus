/**
 * Capa de servicio con métodos CRUD
 */
class CategoriesService {
	constructor() {
		this.categories = [];
		this.generate();
	}

	generate() {
		for (let i = 0; i < 10; i++) {
			this.categories.push({
				id: i,
				name: `Categoria ${i}`,
			});
		}
	}

	/**
	 * Encuentra todas las categorias en el array de objetos
	 * @returns {Array} - Array con todas las categorias
	 */
	async find() {
		return this.categories;
	}

	/**
	 * Encuentra la categoria con el id proporcionado
	 * @param {*} id - id de la categoria
	 * @returns {Object} - Objeto con la categoria
	 */
	async findOne(id) {
		return this.categories.find((category) => category.id === id);
	}

	/**
	 * Crea una categoria con los datos proporcionados
	 * @param {*} data - datos de la categoria
	 * @returns {Object} - Objeto con la categoria creada
	 */
	async create(data) {
		const newCategory = {
			id: this.categories.length + 1,
			name: data.name,
		};
		this.categories.push(newCategory);
		return newCategory;
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
		const index = this.categories.findIndex((category) => category.id === id);

		if (index === -1) {
			throw new Error('categoria no encontrada');
		}

		const category = this.categories[index];
		this.categories[index] = {
			...category,
			...changes,
		};

		return this.categories[index];
	}

	/**
	 * Elimina la categoria con el id proporcionado
	 * @param {*} id - id de la categoria
	 * @returns {Object} - Objeto con la categoria eliminada
	 * @throws {Error} - Error si no se encuentra la categoria
	 */
	async delete(id) {
		const index = this.categories.findIndex((category) => category.id === id);

		if (index === -1) {
			throw new Error('categoria no encontrada');
		}

		this.categories.splice(index, 1);
		return { id };
	}
}

module.exports = CategoriesService;
