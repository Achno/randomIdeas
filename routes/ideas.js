const express = require('express');

const router = express.Router();

//add models
const Idea = require('../models/Idea');

//! ROUTES GET reqs

//* Get all Ideas .get(/api/ideas)

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//* get 1 idea .get(/api/ideas/:id)

router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//! ROUTES POST reqs

//* Add an idea
router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//! ROUTES PUT reqs

//*update an idea
router.put('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    //* Match usernames
    if (idea.username === req.body.username) {
      const updatedIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        {
          new: true, // if an idea with that id doesnt exist it creates a new one
        }
      );

      return res.json({ success: true, data: updatedIdea });
    }

    //* Usernames dont match
    res
      .status(403)
      .json({
        success: false,
        error: 'Not Authorized to update this resource ',
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//! ROUTES DELETE reqs
router.delete('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    //* Match usernames
    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }

    res
      .status(403)
      .json({
        success: false,
        error: 'Not Authorized to delete this resource ',
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: ' Something went wrong' });
  }
});

//! EXPORT MODULE
module.exports = router;
