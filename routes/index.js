var express = require('express');
// workflow configuration
var workflowConfig = require('../models/workflowConfig.model');
var workflowinstance = require('../models/workflowinstance.model');
var advertisement = require('../models/advertisement.model');
var _ = require('lodash');
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
        stepConfig: req.body.stepConfig,
        short_description: req.body.short_description,
        profile_img: req.body.profile_img
    });
    debugger;
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
/* ---------------------------------------------------
 getting workflowconfig by id
 '/getbyId'
  params:{
      itemId
  }
--------------------------------------------------
*/
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

// -----------------------------------------------------------------------------------
// getting saving new instance of WFCONFIG and create new entry of configuration
// -----------------------------------------------------------------------------------
router.post('/saveSettings', function(req, res, next) {
    delete req.body.information._id;
    var data = {
        configuration: req.body.instanceinformation,
    };

    advertisement.create(data, function(err, response) {

        if (!err) {
            req.body.information.advertisementId = response._id;
            insertingNewInstance(req.body.information, res);
        } else {
            res.json(200, {
                status: 500,
                data: err
            });
        }
    });
});

/**
 * Inserting new instance in the db
 * @param obj
 */
function insertingNewInstance(newinstanceInfo, res) {

    workflowinstance.create(newinstanceInfo, function(err, response) {
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
}


// -----------------------------------------------------------------------------------
// updating instance of WFCONFIG and updating game configuration
// -----------------------------------------------------------------------------------
router.post('/updateSettings', function(req, res, next) {

    workflowinstance.findByIdAndUpdate(req.body.information._id, req.body.information, function(err, response) {
        if (err) {
            res.json(500, {
                status: false,
                data: err
            });
        } else {

            var data = {
                configuration: req.body.instanceinformation
            }
            advertisement.findByIdAndUpdate(req.body.information.advertisementId, data, function(error, resp) {
                if (!err) {
                    res.json(200, {
                        status: 200,
                        data: resp
                    });
                } else {
                    res.json(500, {
                        status: 500,
                        data: error
                    });
                }
            });
        }

    });
});

// ==================================================
// workflow instance query related functions
// ==================================================

// ---------------------------------------------------
// Getting all instance informations
// '/getallinstance'
// getting all instances
// ---------------------------------------------------
router.get('/getallinstance', function(req, res, next) {
    // let advertisementIds = [];
    workflowinstance.find()
        .populate('advertisementId')
        .exec(function(err, response) {

            // _.forEach(response, function(value, key) {

            //     advertisementIds.push(value.advertisementId);
            // });
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


/* ---------------------------------------------------
 getting workflowinstance by id
 '/getbyId'
  params:{
      itemId
  }
--------------------------------------------------
*/
router.post('/getInstanceById', function(req, res, next) {
    workflowinstance.findById(req.body.itemId, function(err, response) {
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

module.exports = router;