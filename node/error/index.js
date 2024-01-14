const express = require('express');
const app = express();

// Middleware function to log the current timestamp
const logTimestamp = (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] Request received for: ${req.method} ${
      req.url
    }`
  );
  next(); // Call the next middleware or route handler
};

// Error-handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
};

// Apply middleware functions to all routes
app.use(logTimestamp);

// Route handler that intentionally throws an error
app.get('/error', (req, res, next) => {
  // Simulate an error
  const err = new Error('Intentional Error');
  next(err);
});

// Apply error-handling middleware
app.use(errorHandler);

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
