const express = require('express');
const routerApi = require('./routes');
const {
	errorHandler,
	boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
