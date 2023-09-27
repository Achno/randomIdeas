const mongoose = require('mongoose');

//Create shema

// The shchema takes an object with all the fields that we want a schema to include (id is handled for us)

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Pass the name of the schema and the schema
module.exports = mongoose.model('Idea', IdeaSchema);
