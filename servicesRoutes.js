var express = require('express');
var router = express.Router();
var request = require('request');
var TMDB = require('./TMDB');

const API_KEY = 'fba0c8aa746e9716344df90087fa4cf1';

const tmdb = new TMDB(API_KEY);

router.get('/popular', (req, res, next) => {
    tmdb.popular().then(body => {
        res.json(body);
    }).catch((err) => {
        res.status(503);
    });
});

router.get('/search', (req, res, next) => {
    var keyword = req.query.q;
    if (!keyword) {
        res.status(404);
    } else {
        tmdb.search(keyword).then(body => {
            res.json(body);
        }).catch(err => {
            res.status(503);
        })
    }
})

router.get('/movie', (req, res, next) => {
    var id = req.query.id;
    if (!id) {
        res.status(404);
    } else {
        tmdb.movie(id).then(body => {
            res.json(body);
        }).catch(err => {
            res.status(503);
        })
    }
})

router.get('/reviews', (req, res, next) => {
    var id = req.query.id;
    if (!id) {
        res.status(404);
    } else {
        tmdb.reviews(id).then(body => {
            res.json(body);
        }).catch(err => {
            res.status(503);
        })
    }
})

router.get('/similar', (req, res, next) => {
    var id = req.query.id;
    if (!id) {
        res.status(404);
    } else {
        tmdb.similar(id).then(body => {
            res.json(body);
        }).catch(err => {
            res.status(503);
        })
    }
})


module.exports = router;
