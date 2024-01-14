const express = require('express');
const app = express();

// Route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route for about page
app.get('/about', (req, res) => {
  res.send('About Us Page');
});

// Route for contact page
app.get('/contact', (req, res) => {
  res.send('Contact Us Page');
});

// Route with dynamic parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User Profile Page for ID: ${userId}`);
});

// Route for handling POST requests
app.post('/submit', (req, res) => {
  res.send('Form Submitted Successfully!');
});

// Route for handling a wildcard path
app.get('*', (req, res) => {
  res.send('404 - Not Found');
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
