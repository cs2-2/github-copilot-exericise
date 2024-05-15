// Create web server
// Load the express module to create an Express application.
const express = require('express');
const app = express();

// Define a route handler for the default home page.
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server on port 3000.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
