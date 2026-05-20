const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Haliho!');
});


app.listen(port, () => {
  console.log(`adatbazis: http://localhost:${port}`);
});
