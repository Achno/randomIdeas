const path = require('path');
const express = require('express');
require('dotenv').config();

const port = process.env.PORT;

const connectDB = require('./config/db');

connectDB();

const app = express();

//! Body parser middleware
//Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); //allows you to send raw json to the server
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the randomIdeas API');
});

const ideasRouter = require('./routes/ideas');

app.use('/api/ideas', ideasRouter);
//? PORT

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
