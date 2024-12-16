const express = require('express');
const app = express();

// code added in section 2.4
// benefit of using Express is that simplifies the Node.js syntax
let topBooks = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K Rowling'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R Tolkien'
    },
    {
        title: 'Twilight',
        author: 'Stephanie Meyer'
    }
];

// GET requests --> 2.4
// root request in project
app.get('/', (req,res) => {
    res.send('Welcome to my book club!'):
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname});
});

app.get('/books', (req, res) => {
    res.json(topBooks);
});

// listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
