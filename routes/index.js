var express = require('express');
// workflow configuration
var workflowConfig = require('../models/workflowConfig.model');
var workflowinstance = require('../models/workflowinstance.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json(200, {
        status: true
    });
});

// ---------------------------------------------------
// saving config information
// ---------------------------------------------------
router.post('/save', function(req, res, next) {
    var WFconfig = new workflowConfig({
        name: req.body.name,
        stepConfig: req.body.stepConfig
    });
    WFconfig.save(function(err, response) {
        if (err) {
            res.json(500, {
                status: false,
                data: err
            });
        } else {
            res.json(200, {
                status: true,
                data: {
                    itemId: response._id,
                    name: response.name
                }
            });
        }

    });
});

// ---------------------------------------------------
// Getting all config information
// ---------------------------------------------------
router.get('/getall', function(req, res, next) {
    workflowConfig.find(function(err, response) {
        if (!err) {
            res.json(200, {
                status: 200,
                data: response
            });
        } else {
            res.json(500, {
                status: 500,
                data: err
            });
        }
    });
});
// ---------------------------------------------------
// getting workflowconfig by id
// ---------------------------------------------------
router.post('/getById', function(req, res, next) {
    workflowConfig.findById(req.body.itemId, function(err, response) {
        if (!err) {
            res.json(200, {
                status: 200,
                data: response
            });
        } else {
            res.json(500, {
                status: 500,
                data: err
            });
        }
    });
});

// ---------------------------------------------------
// getting workflowconfig by id
// ---------------------------------------------------
router.post('/saveSettings', function(req, res, next) {
    debugger;
    workflowConfig.findByIdAndUpdate(req.body.information._id, req.body.information, function(err, response) {
        debugger;
        if (!err) {
            insertNewInstance(req.body.instanceinformation, res);
        } else {
            res.json(500, {
                status: 500,
                data: err
            });
        }
    });
});

function insertNewInstance(newinstanceInfo, res) {
    var WFconfig = new workflowinstance({
        configuration: newinstanceInfo
    });
    return WFconfig.save(function(err, response) {
        if (!err) {
            res.json(200, {
                status: 200,
                data: response
            });
        } else {
            res.json(200, {
                status: 500,
                data: err
            });
        }
    });
}

module.exports = router;