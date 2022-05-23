/**
 * Maneja los errores de la aplicación y los envía al cliente
 * @param {*} err - Error que se ha producido
 * @param {*} req - Request que se ha producido
 * @param {*} res - Response que se ha producido
 * @param {*} next - Middleware que se ejecuta después de este
 */
function errorHandler(err, req, res, next) {
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
}

/**
 * Maneja los errores de la aplicación de tipo boom y los envía al cliente
 * @param {*} err - Error que se ha producido
 * @param {*} req - Request que se ha producido
 * @param {*} res - Response que se ha producido
 * @param {*} next - Middleware que se ejecuta después de este
 */
function boomErrorHandler(err, req, res, next) {
	if (err.isBoom) {
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
	} else {
		next(err);
	}
}

module.exports = { errorHandler, boomErrorHandler };
