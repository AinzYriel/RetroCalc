const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/RetroCalc v0.8.html');
});

app.listen(3000);
