const express = require('express');
const router = express.Router();

// Ruta de inicio
router.get('/', (req, res) => {
	res.send('Hello express server!');
});

module.exports = router;
