const { config } = require('../config/config');
const { Sequelize } = require('sequelize');

// Codificar datos delicados
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// URL unico de conexion a la base de datos postgres
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
	dialect: 'postgres',
	logging: console.log,
});

module.exports = sequelize;
