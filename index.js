
const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.get('/test', (req, res) => res.sendStatus(200));

app.get('/env', (req, res) => res.send(`${process.env.NODE_ENV}`));

app.get('*', (req, res) => (
	res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
));

app.listen(PORT, () => console.log('SERVER: listening on port:', PORT));

