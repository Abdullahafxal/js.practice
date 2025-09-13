// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World Abdullah. How are you doing. its newsssssss awesome www');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
