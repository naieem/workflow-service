var express = require('express');
var router = express.Router();
var test = require('../models/test');
/* GET users listing. */
router.post('/test', function(req, res, next) {
    var tes = new test({
        name: req.body.name,
        stepConfig: req.body.stepConfig
    });
    tes.save(function(error, response) {
        res.json(200, {
            status: true,
            data: response
        });
    });
});

module.exports = router;