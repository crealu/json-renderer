const express = require('express');
const path = require('path');
const port = process.env.PORT || 9100;
const app = express();

const pathToBuild = path.join(__dirname, 'build');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(pathToBuild));

app.get('/', (req, res) => {
	res.sendFile(pathToBuild, 'index.html');
});

app.listen(port, () => console.log(`Listening on ${port}`));
