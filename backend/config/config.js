require('dotenv').config();

/**
 * @description Descripcion de cada variable de entorno
 * @property {string} env - Entorno de ejecucion || dev
 * @property {string} port - Puerto de escucha
 * @property {string} dbHost - Host de la base de datos
 * @property {string} dbPort - Puerto de la base de datos
 * @property {string} dbName - Nombre de la base de datos
 * @property {string} dbUser - Usuario de la base de datos
 * @property {string} dbPassword - Contraseña de la base de datos
 */
const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	dbPort: process.env.DB_PORT,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
};

module.exports = { config };
