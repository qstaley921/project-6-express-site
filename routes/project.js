// ====================================
//  GLOBAL VARIABLES
// ====================================

const express = require('express');
const router = express.Router();
const projectData = require('../data.json').projects;

/**
 * Renders a `project.pug` view based on the path :id which corresponds to the projectData array index
 * i.e. /project/1 renders a project page with the data for Project 1 
 */
router.get('/project/:id', (req, res) => {
    const idValue = req.params; 
    const index = parseInt(idValue.id) - 1; // minus one to correspond with projectData [array] index
    const data = projectData[index]; // includes only the data for a single project with the given /:id
    if (index + 1 === projectData.length) {
        data.next = 1;
    } else {
        data.next = index + 2;
    }
    res.render('project', { data });
});

module.exports = router;