require('dotenv').config();

/**
 * @description Descripcion de cada variable de entorno
 * @property {string} env - Entorno de ejecucion || dev
 * @property {string} isProd - Indica si la aplicacion se ejecuta en produccion
 * @property {string} port - Puerto de escucha
 * @property {string} dbHost - Host de la base de datos
 * @property {string} dbPort - Puerto de la base de datos
 * @property {string} dbName - Nombre de la base de datos
 * @property {string} dbUser - Usuario de la base de datos
 * @property {string} dbPassword - Contraseña de la base de datos
 * @property {string} dbUrl - Url de la base de datos
 * @property {string} databaseUrl - Url de la base de datos
 * @property {string} apiKey - ApiKey de la aplicacion
 * @property {string} jwtSecret - JsonWebToken secret
 */
const config = {
	env: process.env.NODE_ENV || 'dev',
	isProd: process.env.NODE_ENV === 'production',
	port: process.env.PORT || 3000,
	dbPort: process.env.DB_PORT,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbUrl: process.env.DB_URL,
	databaseUrl: process.env.DATABASE_URL,
	apiKey: process.env.API_KEY,
	jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
