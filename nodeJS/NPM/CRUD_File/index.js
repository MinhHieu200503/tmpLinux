const express = require('express');
const app = express();
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const download = require('download');
// const uploads = multer({ dest: 'uploads/' });
const model = require('./model/model');
// connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/CRUD_file');
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage }).single('myFile');

app.post('/file', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.send('err ' + err);
        } else {
            res.send('uploads success');
        }
    });
});

let filePath = './uploads/legion5_Wall.jpg';
app.get('/download', (req, res) => {
    download('legion5_Wall.jpg', filePath).then(() => {
        console.log('Download Completed');
    });
});

app.get('/', (req, res) => {
    res.json('hello world');
});

app.listen(3000, () => {
    console.log('start');
});
