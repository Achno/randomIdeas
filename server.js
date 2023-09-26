const express = require('express');
const port = 5000;

const app = express();

//? create routes

app.get('/', (req, res) => {
  res.send('Welcome to the randomIdeas API');
});

const ideasRouter = require('./routes/ideas');

app.use('/api/ideas', ideasRouter);
//? PORT

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
