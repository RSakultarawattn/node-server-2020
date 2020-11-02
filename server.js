const express = require('express');
const app = express();
const port = 3000;

const port = process.env.PORT;

app.get('/', (req, res) => {

    res.json([
        {
            size: 'big'
        },
        {
            size: 'bigger'
        }
    ]);
});

app.get('/owls', (req, res) => {
    const owls = [
        {
            name: 'snow owl'
        },
        {
            name: 'elf owl'
        },
        {
            name: 'barn owl'
        }
    ];

    res.json(owls)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});