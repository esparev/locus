const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const placesRouter = require('./places.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
	const router = express.Router();

	// Ruta padre
	app.use('/api/v1', router);
	// Rutas hijos
	app.use('/users', usersRouter);
	app.use('/places', placesRouter);
	app.use('/categories', categoriesRouter);
	app.use('/auth', authRouter);
}

module.exports = routerApi;
