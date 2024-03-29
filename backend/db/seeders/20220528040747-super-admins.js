'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(USER_TABLE, [
			{
        slug: 'esparev',
        name: 'JoseMa Esparev',
				email: 'esparev@hotmail.com',
				password: '$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'hero',
				image: '',
			},
			{
        slug: 'lpaz',
        name: 'Lupita Paz',
				email: 'lpaz@hotmail.com',
				password: '$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'hero',
				image: '',
			},
			{
        slug: 'eljhonnyx',
        name: 'Jhonatan Rodriguez',
				email: 'brandon@hotmail.com',
				password: '$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'hero',
				image: '',
			},
		]);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(USER_TABLE, null);
	},
};
