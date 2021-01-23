const express = require('express');
const router = express.Router();
const projectData = require('../data.json').projects;

router.get('/', (req, res) => {
    res.render('index', { projectData });
});

module.exports = router;