const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors'); // Import the 'cors' middleware

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 3001; // Use port 3001 for the API

app.get('/api/users', (req, res) => {
  // Read the JSON file containing user data
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Parse the JSON data
    const users = JSON.parse(data);
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
