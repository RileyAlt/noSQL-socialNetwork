const express = require('express');
const db = require('./config/connection');

const app = express();
const port = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(routes);

db.once('open', () => {
    app.listen(port, () => {
        console.log(`API server running on port ${port}!`);
    });
});