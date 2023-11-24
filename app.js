const express = require('express');
const path = require('path');

const app = express();

// Set the port
const PORT = process.env.PORT || 7000;

// Set the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
