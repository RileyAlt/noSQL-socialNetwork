const express = require('express');
const db = require('./config/connections');

const app = express();
const port = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

db.once('open', () => {
    app.listen(port, () => {
        console.log(`API server running on port ${port}!`);
    });
});