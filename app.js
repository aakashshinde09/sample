const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app deployed on ECS Fargate.');
});

// About Page
app.get('/about', (req, res) => {
  res.send('This is the about page. Here we share details about the application.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
