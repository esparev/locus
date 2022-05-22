const boom = require('@hapi/boom');

/**
 * Capa de servicio con métodos CRUD
 */
class PlacesService {
	constructor() {
		this.places = [];
		this.generate();
	}

	generate() {
		for (let i = 0; i < 10; i++) {
			this.places.push({
				id: i,
				name: `Lugar ${i}`,
			});
		}
	}

	/**
	 * Encuentra todos los lugares en el array de objetos
	 * @returns {Array} - Array con todos los lugares
	 */
	async find() {
		const places = this.places;

		if (!places) {
			throw boom.notFound('no hay lugares');
		}

		return places;
	}

	/**
	 * Encuentra el lugar con el id proporcionado
	 * @param {*} id - id del lugar
	 * @returns {Object} - Objeto con el lugar
	 */
	async findOne(id) {
		const place = this.places.find((place) => place.id === id);

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
		const newPlace = {
			id: this.places.length + 1,
			name: data.name,
		};
		this.places.push(newPlace);
		return newPlace;
	}

	/**
	 * Actualiza parcialmente el lugar con el id proporcionado
	 * con los datos proporcionados
	 * @param {*} id - id del lugar
	 * @param {*} changes - datos del lugar
	 * @returns {Object} - Objeto con el lugar actualizado
	 * @throws {Error} - Error si no se encuentra el lugar
	 */
	async update(id, changes) {
		const index = this.places.findIndex((place) => place.id === id);

		if (index === -1) {
			throw boom.notFound('lugar no encontrado');
		}

		this.places[index] = {
			...place,
			...changes,
		};

		return this.places[index];
	}

	/**
	 * Elimina el lugar con el id proporcionado
	 * @param {*} id - id del lugar
	 * @returns {Object} - Objeto con el lugar eliminado
	 * @throws {Error} - Error si no se encuentra el lugar
	 */
	async delete(id) {
		const index = this.places.findIndex((place) => place.id === id);

		if (index === -1) {
			throw boom.notFound('lugar no encontrado');
		}

		this.places.splice(index, 1);
		return { id };
	}
}

module.exports = PlacesService;
