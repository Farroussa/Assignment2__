const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/data/:id', (req, res) => {
  const id = req.params.id;
  const result = {
    message: `Received ID: ${id}`,
  };
  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const { processInput } = require('./public/functions.js');

app.get('/api/data/:id', (req, res) => {
  const id = req.params.id;
  const processedData = processInput(id);
  const result = {
    message: `Received ID: ${id}`,
    processedData,
  };
  res.json(result);
});

