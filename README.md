# Treehouse JS Techdegree Project 6: Express Site Portfolio
> A Treehouse Techdegree project, practicing Node.js & Express. The below `README.md` includes (0) how to install the app and use it; (1) the main components I created to fulfill the requirements of the proejct; (2) the flow of the app so you/me can reference, generally, how it works. Enjoy, and thanks so much for reading :blush: 

## Overview 
0. [Using the App](#using-the-app)
1. [The Components](#the-components)
2. [The Flow of the App](#the-flow-of-the-app)
3. [Static Elements and CSS Changes](#static-elements-and-css-changes)

## Using the App
> Using the app should be simple enough. I'll assume you have Node.js installed on your computer, including NPM. 

1. After downloading or cloning the files, run the following code when in the project's local directory: *(And, of course, you can guarantee your terminal is in the correct local directory by opening a terminal session in your prefferred text-editor after you've opened my project's files in said text-editor)*

2. type `npm start` into your terminal; then press enter. *the project's npm dependencies should install, and the console should log `this app is running on localhost:3000`*

3. Open your favorite web-browser and type `localhost:3000/` into the URL bar&mdash;that should load this project's home page.

4. All done. Yep, that should be it. You'll notice, there's a **start** script in the `package.json` which runs `node app.js` and a **prestart** script that runs `npm install` which installs the dependencies specified within the `package.json` file. Yay!&mdash;technology is so much fun when it works ... so mind boggling when it doesn't.

5. If it doesn't, then, tough luck. Nah, JK. Perhaps, make sure `node --version` returns a node version number, and the same with `npm --version`. Make sure you've changed your terminal's directory to wherever you've saved my project's files. Other than that, it works on my machine :wink:

## The Components
1. **PUG Templates** | *in the `/views/...` directory*
    1. **`layout.pug`** | *the default template which includes the `<html>` and `<head>`* 
    2. **`index.pug`** | *the template for the app's home page > `extends layout.pug`*
    3. **`project.pug`** | *the template for the app's project page > `extends layout.pug`*
    4. **`about.pug`** | *the template for the about page > `extends layout.pug`*
    5. **`error.pug`** | *the template for the 'general' error page > `extends layout.pug`*
    6. **`page-not-found.pug`** | *the template for the 404 status > `extends layout.pug`*
2. **Static Assets** | *in the `/public/...` directory*
    1. **`foundation.css`** | *these styles were written by [ZURB](http://foundation.zurb.com) and were left unaltered*
    2. **`style.css`** | *these styles were mostly written by Treehouse, though I list below what I changed*
    3. **`/imgs/`** | *these include all the imgs for the project&mdash;though it should be noted, the project uses `app.use('/static', express.static('public'))`, so path to this folder is actually `/static/imgs/` not `/public/imgs/`*
3. **App Javascript** | *this does not include the `/js/` directory, which includes jquery and other vendor documents that I did not write nor adjust*
    1. **`app.js`** | *this is what calls the ***Express*** commands and routes*
    2. **`/routes/index.js`** | *this routes the home-page*
    3. **`/routes/about-page.js`** | *this routes the about-page*
    4. **`/routes/project.js`** | *this routes the project page*
4. JSON Files | *there are two main json files:*
    1. **`package.json`** | *this is NPM package for installing the dependencies and running the app* 
    2. **`data.json`** | *this is the data/information for the pages to render, which is fed into PUG templates dynamically* 


## The Flow of the App 
> This is the topical-level flow. I've also provided comments at critical points within the program

1. `app.js` runs and requires Express 
    1. `app.js` uses the following route modules: | *the files are first required, `const main routes = require('./routes')` and then used, `app.use(mainRoutes`)`*
        1. `index.js` mainRoutes | *which routes to the home page*
            1. the `projectData` is required, `require('../data.json')` and passed through as a `res.locals` to the pug view, `res.render('index', { data });` | *this applies to the two following examples as well*
        2. `about-page.js` aboutRoute | *which routes to the about page*
        3. `project.js` projectRoutes | *which routes to the project pages*
2. `/routes/` uses `express.Router()` to `Router().get(/path, () => {})`
    1. path `/` renders the `index` pug template | *see `index.js`*
    2. path `/project/:id` renders the `project` pug template | *see `project.js`*
    3. path `/about` renders the `about` pug template | *see `about-page.js`*
3. `app.js` then handles errors and renders the correct `err.status` and page respectively
    
## Static Elements and CSS Changes 
> As per this project's grading requirements, we were required to make at least three css customizations. Those are enumerated here, including some additional info on how the static files are rendered. 

1. **Font Changes** | *I changed the font in the following ways:*
    1. The home page gallery thumbnail titles are smaller, have weight variance, and are no longer all uppercase
    2. The font on the project pages includes italicized captions below each of the images
    3. The brief bio within the layout aside is not justfied
2. **Box Shadows**
    1. I added an inset box shadow and background to the project thumbnails when a cursor hovers or focuses on them
3. **Background**
    1. I changed the layout aside background to pure black for a little more contrast, and to match the borders I put around each of my imgs

**Static Elements** 

Just to note, I've used `express.static('public')` per the project's guidelines, where the new route for the contents within the public directory is now `/static/` 
- And, the routes to the images are stored in the `data.json` files
- the routes to the `<head>` elements and `<scripts>` are in the `layout.pug` view