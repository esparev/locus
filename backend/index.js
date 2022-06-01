const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const passport = require('passport');
require('./utils/auth');

const { checkApiKey } = require('./middlewares/auth.handler');
const {
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', checkApiKey, (req, res) => {
	res.send('LOCUS API');
});

app.use(passport.initialize());
app.use(express.json());
app.use(cors());

routerApi(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
