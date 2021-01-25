// ====================================
//  GLOBAL VARIABLES & REQUIREMENTS
// ====================================

const express = require('express');
const router = express.Router();
const projectData = require('../data.json').projects;

// ====================================
//  EXPRESS MIDDLEWARE 
// ====================================

/**
 * Renders the `index.pug` template view when the path is `/`
 */
router.get('/', (req, res) => {
    res.render('index', { projectData });
});

// ====================================
//  EXPORT MODULE
// ====================================

module.exports = router;