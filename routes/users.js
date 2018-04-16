var express = require('express');
var router = express.Router();
var test = require('../models/test');
var test1 = require('../models/test1');
/* GET users listing. */
router.post('/test', function(req, res, next) {
    var tes1 = new test1({
        testname1: "hllo world"
    });
    tes1.save(function(error, response) {
        if (!error) {
            var tes = new test({
                name: req.body.name,
                email: req.body.email,
                test_id: response._id
            });


            tes.save(function(er, tes1res) {
                res.json(200, {
                    status: true,
                    data: tes1res
                });
            });
        }
    });
});

router.post('/get', function(req, res, next) {
    test.findOne({ _id: req.body.id }).populate('test_id', 'testnam1').exec(function(err, story) {
        if (err) return handleError(err);
        res.json(200, {
            status: true,
            data: story
        });
    });
})
module.exports = router;