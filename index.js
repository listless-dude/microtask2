const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoURI = 'mongodb+srv://{username}:{password}@cluster0.yubrivh.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5000;
app.use(express.json());

mongoose.connect(mongoURI, () => {
    console.log('Connected to mongo successfully');
});

app.use('/api/auth', require('./routes/authenticate'));
app.use('/api/visitor', require('./routes/visitorCount'));
// app.listen(PORT, () => {
//     console.log(`Server running on the port: ${PORT}`);
// });
module.exports = app;