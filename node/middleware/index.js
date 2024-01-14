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

// Middleware function to log "End of Middleware"
const logEndOfMiddleware = (req, res, next) => {
  console.log('End of Middleware');
  next(); // Call the next middleware or route handler
};

// Apply middleware functions to all routes
app.use(logTimestamp);
app.use(logEndOfMiddleware);
// Route handler
app.get('/', (req, res) => {
  console.log('hello world');
  res.send('Hello, World!');
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
