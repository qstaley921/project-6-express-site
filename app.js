// ====================================
//  GLOBAL VARIABLES
// ====================================

const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

/**
 * For testing 500 errors or other general errors
 * - Leave commented for the app to effectively work
 */
// app.use((req, res, next) => {
//     const err = new Error('This err is on line 15 in app.js, and is a test.');
//     err.status = 500;
//     next(err);
// });

const mainRoutes = require('./routes');
const aboutRoute = require('./routes/about-page');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use(aboutRoute);
app.use(projectRoutes);

app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status === undefined) { // renders when html cannot be processed, a pug template is broken
        res.locals.error.message = `Oops. This page isn't working. Go somewhere else.`;
        res.locals.error.status = 500;
        console.error('Check your HTML templates; something didn\'t render correctly');
        return res.render('error');
    } else {
        res.status(err.status);
    }
    
    if(err.status === 404) { // renders when the page cannot be found
        return res.render('page-not-found');
    } 
    return res.render('error'); // catches other errors, like 500
});

app.listen(3000, () => {
    console.log('This app is running on localhost:3000');
}); 
