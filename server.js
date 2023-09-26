const express = require('express');
const port = 5000;

const app = express();

//! Body parser middleware

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
