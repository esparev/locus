const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
