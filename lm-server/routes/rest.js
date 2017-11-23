const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const momentService = require('../services/momentService');

// GET /api/v1/moments
router.get('/moments', function(req, res) {
    momentService.getMoments()
        .then(moments => res.json(moments));
});

// GET /api/v1/moments/:id
router.get('/moments/:id', function(req, res) {
    const id = req.params.id;
    momentService.getMoment(+id)
        .then(moment => res.json(moment));
});

// POST /api/v1/moments
router.post('/moments', jsonParser, function(req, res) {
    momentService.addMoment(req.body)
        .then(function(moment) {
            res.json(moment);
        }, function(error) {
            res.status(400).send("Opps...you've already post this moment.");
        })
});

module.exports = router;