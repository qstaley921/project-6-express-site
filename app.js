// ====================================
//  GLOBAL VARIABLES & REQUIREMENTS
// ====================================

const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

// Routes or Module imports from `/routes/
const mainRoutes = require('./routes');
const aboutRoute = require('./routes/about-page');
const projectRoutes = require('./routes/project');

// ====================================
//  EXPRESS MIDDLEWARE 
// ====================================

app.use(mainRoutes); // for importing `index.js` & rendering the home page
app.use(aboutRoute); // for importing `about-page.js` & rendering the about page
app.use(projectRoutes); // for importing `project.js` & rendering the project pages

/**
 * Creates a 404 Error Object and passes it to the next middlware function
 */
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

/**
 * returns one of 3 outcomes: 
 *  - 1. the program breaks and the Error object is not created, and is undefined
 *      - @return renders `error.pug` template
 *  - 2. the Error.status is 404
 *      - @return renders the `page-not-found.pug` template
 *  - 3. a general Error occurs and 
 *      - @return renders `error.pug` template  
 */
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

/**
 * Listens at port 3000
 */
app.listen(3000, () => {
    console.log('This app is running on localhost:3000');
}); 

// ====================================
// OTHER
// ====================================

/**
 * For testing 500 errors or other general errors
 * - Leave commented for the app to effectively work
 * - Or paste above the Middleware to test 
 */
// app.use((req, res, next) => {
//     const err = new Error('This err is on line 15 in app.js, and is a test.');
//     err.status = 500;
//     next(err);
// });//