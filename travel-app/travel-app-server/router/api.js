const express = require('express');
const router = express.Router();
const Travel = require('../models/travel');

// get a list of travel data from the database
router.get('/travel',function(req,res,next){
    Travel.find({}).then(function(travelData){
        res.send(travelData);
    }).catch(next);
});

// add a new travel data to database
router.post('/travel',function(req,res,next){
    Travel.create(req.body).then(function(travelData){
        res.send(travelData);
    }).catch(next);
});

module.exports = router;