require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.dist/index.html'));
})

// app.get('/dist/main.js', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './dist/main.js'));
// })

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});