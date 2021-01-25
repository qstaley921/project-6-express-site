// ====================================
//  GLOBAL VARIABLES & REQUIREMENTS
// ====================================

const express = require('express');
const router = express.Router();

// ====================================
//  EXPRESS MIDDLEWARE 
// ====================================

/**
 * Renders the `about.pug` template view when the path is `/about`
 */
router.get('/about', (req, res) => {
    res.render('about');
});

// ====================================
//  EXPORT MODULE
// ====================================

module.exports = router;