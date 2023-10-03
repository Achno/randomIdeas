const path = require('path');
const express = require('express');
const cors = require('cors'); //* Cross origin login from port 5173 with API instead of 5000 problem fix
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

//* cords middleware
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5000'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to the randomIdeas API');
});

const ideasRouter = require('./routes/ideas');

app.use('/api/ideas', ideasRouter);
//? PORT

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
