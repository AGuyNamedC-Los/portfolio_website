require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static('./dist'));
app.use(express.static('public'));
// console.log(__dirname + './public');
console.log(__dirname + '/public/');

app.use((req, res, next) => {
    if (req.get('X-Forwarded-Proto') === 'http') {
      res.redirect(301, `https://${req.headers.host}${req.url}`);
    }
  
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.dist/index.html'));
})

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});