const express = require('express');
const path = require('path');
const { readFile } = require('fs').promises;
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.get('/', async (request, response) => {

    response.send(await readFile('./home.html', 'utf8' ));

});

app.listen(PORT, () => console.log('PORT 3000'))