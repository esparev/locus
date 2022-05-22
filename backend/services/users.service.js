const boom = require('@hapi/boom');

/**
 * Capa de servicio con métodos CRUD
 */
class UsersService {
	constructor() {
		this.users = [
			{
				id: 1,
				name: 'Esparev',
				email: 'esparev@hotmail.com',
				password: 'invisible',
				rol: 'hero',
			},
		];
		this.generate();
	}

	generate() {
		for (let i = 0; i < 10; i++) {
			this.users.push({
				id: i,
				name: `Usuario ${i}`,
			});
		}
	}

	/**
	 * Encuentra todos los usuarios en el array de objetos
	 * @returns {Array} - Array con todos los usuarios
	 */
	async find() {
		const users = this.users;

		if (!users) {
			throw boom.notFound('no hay usuarios');
		}

		return users;
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
		if (user.rol === 'hero') {
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

		if (user.rol === 'hero') {
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
		if (this.users[index].rol === 'hero') {
			throw boom.forbidden('no puedes eliminar este usuario');
		}

		this.users.splice(index, 1);
		return { id };
	}
}

module.exports = UsersService;
