const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const passport = require('passport');
require('./utils/auth');

const {
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
	res.send('LOCUS API');
});

app.use(passport.initialize());
app.use(express.json());

const whitelist = [
	'http://localhost:3000',
	'http://127.0.0.1:3000',
	'http://localhost:3006',
	'http://127.0.0.1:3006',
];
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('No permitido'));
		}
	},
};

app.use(cors(options));

routerApi(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
