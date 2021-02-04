// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initializing Express
const app = express();
const PORT = process.env.PORT || 5000;

// Set Up Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listen to PORT
app.listen(PORT, () => {
console.log(`App is listening on port: ${PORT}`);
});