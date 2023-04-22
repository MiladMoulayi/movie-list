const express = require('express');
var db = require('../server/db');
const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})