const homeRouter = require('./home.router');
const usersRouter = require('./users.router');
const placesRouter = require('./places.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  app.use('/', homeRouter);
	app.use('/api/users', usersRouter);
	app.use('/api/places', placesRouter);
	app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
