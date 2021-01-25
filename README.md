# project-6-express-site
 A Treehouse Techdegree project, practicing Node.js & Express 

## Overview 
1. [The Components](#the-components)
2. [The Flow of the App](#the-flow-of-the-app)

## The Components
- a. PUG Templates | *in the `/views/...` directory*
    - `layout.pug` | *the default template which includes the `<html>` and `<head>`* 
    - `index.pug` | *the template for the app's home page > `extends layout.pug`*
    - `project.pug` | *the template for the app's project page > `extends layout.pug`*
    - `about.pug` | *the template for the about page > `extends layout.pug`*
    - `error.pug` | *the template for the 'general' error page > `extends layout.pug`*
    - `page-not-found.pug` | *the template for the 404 status > `extends layout.pug`*
- b. Static Assets | *in the `/public/...` directory*
    - `foundation.css` | *these styles were written by [ZURB](http://foundation.zurb.com) and were left unaltered*
    - `style.css` | *these styles were mostly written by Treehouse, though I list below what I changed*
    - `/imgs/` | *these include all the imgs for the project&mdash;though it should be noted, the project uses `app.use('/static', express.static('public'))`, so path to this folder is actually `/static/imgs/` not `/public/imgs/`
- c. App Javascript | *this does not include the `/js/` directory, which includes jquery and other vendor documents that I did not write nor adjust*
    - `app.js` | *this is what calls the ***Express*** commands and routes*
    - `/routes/index.js` | *this routes the home-page*
    - `/routes/about-page.js` | *this routes the about-page*
    - `/routes/project.js` | *this routes the project page*
- d. JSON Files | *there are two main json files:*
    - `package.json` | *this is NPM package for installing the dependencies and running the app* 
    - `data.json` | *this is the data/information for the pages to render, which is fed into PUG templates dynamically* 

---

## The Flow of the App 

