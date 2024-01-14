const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect('YOUR_MONGODB_CONNECTION_URL', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process on connection error
  }
})();

// Define a MongoDB schema
const exampleSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Define a MongoDB model based on the schema
const ExampleModel = mongoose.model('Example', exampleSchema);

// Express route to fetch data from MongoDB
app.get('/fetch-data', async (req, res) => {
  try {
    // Fetch data from MongoDB collection
    const data = await ExampleModel.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
