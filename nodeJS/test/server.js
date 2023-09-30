const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));

//
app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.post('/post', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

app.listen(3000, () => {
    console.log('server is running');
});
