/**
 * Capa de servicio con métodos CRUD
 */
class UsersService {
	constructor() {
		this.users = [];
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
	find() {
		return this.users;
	}

	/**
	 * Encuentra el usuario con el id proporcionado
	 * @param {*} id - id del usuario
	 * @returns {Object} - Objeto con el usuario
	 */
	findOne(id) {
		return this.users.find((user) => user.id === id);
	}

	/**
	 * Crea un usuario con los datos proporcionados
	 * @param {*} data - datos del usuario
	 * @returns {Object} - Objeto con el usuario creado
	 */
	create(data) {
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
	update(id, changes) {
		const index = this.users.findIndex((user) => user.id === id);

		if (index === -1) {
			throw new Error('usuario no encontrado');
		}

		const user = this.users[index];
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
	delete(id) {
		const index = this.users.findIndex((user) => user.id === id);

		if (index === -1) {
			throw new Error('usuario no encontrado');
		}

		this.users.splice(index, 1);
		return { id };
	}
}

module.exports = UsersService;
