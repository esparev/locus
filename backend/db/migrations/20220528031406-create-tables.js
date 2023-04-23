'use strict';
/**
 * Crea las tablas iniciales para evitar la creación de cada tabla
 * cada vez que se conecta a la base de datos via sequelize
 */
const { UserSchema, USER_TABLE } = require('../models/user.model');
const { PlaceSchema, PLACE_TABLE } = require('../models/place.model');
const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.createTable(USER_TABLE, UserSchema);
		await queryInterface.createTable(PLACE_TABLE, PlaceSchema);
		await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable(USER_TABLE);
		await queryInterface.dropTable(CATEGORY_TABLE);
		await queryInterface.dropTable(PLACE_TABLE);
	},
};