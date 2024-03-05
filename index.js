// Use Express - a web server module
import express from 'express';

// The port to run the server on
// Used to run on port 80
const port = 3000;

// Create a new web server
// store in the variable app
const app = express();

// Serve all files in the www folder
// to the web browser
app.use(express.static('www'));

// Start the web server
app.listen(port, () => console.log('Running on http://localhost:' + port));