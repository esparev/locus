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
	 * @param {*} id - id del usuario
	 * @returns {Object} - Objeto con el usuario
	 */
	async findOne(id) {
		const user = this.users.find((user) => user.id === id);

		if (!user) {
			throw boom.notFound('usuario no encontrado');
		}
		if (user.role === 'hero') {
			throw boom.forbidden('no puedes ver este usuario');
		}

		return user;
	}

	/**
	 * Crea un usuario con los datos proporcionados
	 * @param {*} data - datos del usuario
	 * @returns {Object} - Objeto con el usuario creado
	 */
	async create(data) {
		const newUser = {
			id: this.users.length + 1,
			name: data.name,
		};
		this.users.push(newUser);
		return newUser;
	}

	/**
	 * Actualiza parcialmente el usuario con el id proporcionado
	 * con los datos proporcionados
	 * @param {*} id - id del usuario
	 * @param {*} changes - datos del usuario
	 * @returns {Object} - Objeto con el usuario actualizado
	 * @throws {Error} - Error si no se encuentra el usuario
	 */
	async update(id, changes) {
		const index = this.users.findIndex((user) => user.id === id);

		if (index === -1) {
			throw boom.notFound('usuario no encontrado');
		}

		const user = this.users[index];

		if (user.role === 'hero') {
			throw boom.forbidden('no puedes actualizar este usuario');
		}

		this.users[index] = {
			...user,
			...changes,
		};

		return this.users[index];
	}

	/**
	 * Elimina el usuario con el id proporcionado
	 * @param {*} id - id del usuario
	 * @returns {Object} - Objeto con el usuario eliminado
	 * @throws {Error} - Error si no se encuentra el usuario
	 */
	async delete(id) {
		const index = this.users.findIndex((user) => user.id === id);

		if (index === -1) {
			throw boom.notFound('usuario no encontrado');
		}
		if (this.users[index].role === 'hero') {
			throw boom.forbidden('no puedes eliminar este usuario');
		}

		this.users.splice(index, 1);
		return { id };
	}
}

module.exports = UsersService;
