const express = require('express');
const path = require('path');

var app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist/Cuber')));

app.route('/*').get((req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Cuber/index.html'));
});
app.listen(PORT);