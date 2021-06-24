'use strict';
var express = require('express');
var router = express.Router();

var getData = function () {
    var data = {
        'item1': 'https://cdn-1.motorsport.com/images/vmt/725ennn2/s800/indycar-colton-herta-takes-vi-2-2.jpg',
        'item2': 'https://discoverboating.s3.amazonaws.com/boat-selector/boat-details/20/bass-boats-image-04.jpg',
        'item3': 'http://www.isnnews.net/babylon5/gallery/ws/whitestar13.jpg'
    }
    return data;
}

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', "data": getData() });
});
//router.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//});

module.exports = router;
