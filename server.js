const express = require('express');
const app = express();

const PORT = process.env.PORT;

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

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});