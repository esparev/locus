'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(USER_TABLE, [
			{
        slug: 'esparev',
        name: 'JoseMa Esparev',
				email: 'esparev@hotmail.com',
				password: 'password123',
				role: 'hero',
				image: '',
			},
			{
        slug: 'lpaz',
        name: 'Lupita Paz',
				email: 'lpaz@hotmail.com',
				password: 'password123',
				role: 'hero',
				image: '',
			},
			{
        slug: 'eljhonnyx',
        name: 'Jhonatan Rodriguez',
				email: 'brandon@hotmail.com',
				password: 'password123',
				role: 'hero',
				image: '',
			},
		]);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(USER_TABLE, null);
	},
};
