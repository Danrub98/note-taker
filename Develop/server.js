const express = require('express');
const path = require ('path');
 

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
