// Dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// Create Routes for notes.html and index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));


// Create API Routes (GET and POST)

// Listen to PORT
app.listen(PORT, () => {
console.log(`App is listening on port: ${PORT}`);
});