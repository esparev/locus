const { config } = require('../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

// Codificar datos delicados
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// URL unico de conexion a la base de datos postgres
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
	dialect: 'postgres',
});

setupModels(sequelize);

/**
 * Con los modelos creados, sync creara
 * una estrcutura de tablas en la base de datos
 * a seguir dependiendo de la configuracion
 * del esquema de configuracion
 */
sequelize.sync()

module.exports = sequelize;
