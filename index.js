const express = require('express'),
    morgan = require('morgan');
const app = express();


//Middlware: myLogger
// ADD middleware function: myLogger to project.
let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
};
// Middleware: requestTime
// ADD middleware function: requestTime to project.
let requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

// code added in section 2.4
// benefit of using Express is that simplifies the Node.js syntax
// a list of my favorite movies : add 10 movies
let topMovies = [

    {
        title: 'Instructions Not Included',
        year: '2013'
    },
    {
        title: 'Mighty Joe Young',
        year: '1998'
    },
    {
        title: 'The Iron Giant',
        year: '1999'
    },
    {
        title: 'Fast Five',
        year: '2011'
    },
    {
        title: 'The Breakfast Club',
        year: '1985'
    },
    {
        title: 'The Sandlot',
        year: '1993'
    },
    {
        title: 'Blade',
        year: '1998'
    },
    {
        title: 'Edward Scissorhands',
        year: '1990'
    },
    {
        title: 'Transformers',
        year: '2007'
    },
    {
        title: 'Grease',
        year: '1978'
    },

];

// add this line after middleware
app.use(myLogger);
app.use(requestTime);

// APP USING MORGAN
app.use(morgan('common'));

// USING EXPRESS STATIC FOR DOCUMENTATION.HTML
app.use(express.static('public'));

// GET root requests in project --> 2.4
app.get('/', (req, res) => {
    res.send('Welcome to my app!');
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

// ADD MIDDLEWEAR FUNCTION : ERROR-HANDLING 
app.use((err, req, res, next) => {
    // logic
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests on port 8080 --> node index.js 
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});