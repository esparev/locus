const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
require('./utils/auth');

const { checkApiKey } = require('./middlewares/auth.handler');
const {
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.get('/', checkApiKey, (req, res) => {
	res.send('LOCUS API');
});

app.use(cors());
app.use(express.json());

routerApi(app);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
