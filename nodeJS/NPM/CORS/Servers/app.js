const express = require('express');
const app = express();
const cors = require('cors');

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST'],
    })
);

app.get('/data', (req, res) => {
    res.json({
        name: 'Hieu',
        age: 20,
    });
});

app.listen(3000, () => {
    console.log('service start post 3000');
});
