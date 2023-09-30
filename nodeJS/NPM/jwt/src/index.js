const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = process.env.PORT;
const routes = require('./routes/index.router');

app.use(express.json()); // put on code req,res => process req,res => json same body-parser . use in express v4>

mongoose
    .connect(process.env.MONGODB_URL)
    .then((success) => {
        console.log(`mongodb connect success`);
    })
    .catch((error) => console.log('connect mongodb failed'));

app.use(cors()); // fix error original domain
app.use(cookieParser()); //use cookie
// app.use(express.json()); // parser req,res => json
app.use(routes);
app.use((req, res, next) => {
    const error = new Error('not found');
    next(error);
});

app.use((error, req, res, next) => {
    const mess = 'not have';
    res.status(400).json({ error: error.message, mess });
});
app.listen(port, () => {
    console.log(`Server is start in port ${port}`);
});
