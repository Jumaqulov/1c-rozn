const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const html = {
    home: path.join(__dirname, '../', 'views/html/home.html'),
}

app.use('/assets', express.static(path.join(__dirname, '../', 'assets')));
app.use('/css', express.static(path.join(__dirname, '../', 'views/css')));
app.use('/js', express.static(path.join(__dirname, '../', 'views/js')))


app.get('/', (req, res) => {
    res.sendFile(html.home);
})

app.listen(port, console.log(port));