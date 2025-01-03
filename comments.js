// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the 'express.static' middleware to serve static files
app.use(express.static('public'));

// Use the 'express.json' middleware to parse JSON bodies
app.use(express.json());

// Use the 'express.urlencoded' middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Import the 'comments' module
const comments = require('./comments');

// Define the route to get all comments
app.get('/comments', (req, res) => {
  // Send the response
  res.json(comments.getAll());
});

// Define the route to add a new comment
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body;

  // Add the comment to the 'comments' module
  comments.add(comment);

  // Send the response
  res.status(201).send('Comment added successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});