var express = require('express');
var workflowConfig = require('../models/workflowConfig.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json(200,{
    status:true
  });
});

router.post('/save', function(req, res, next) {
  var WFconfig = new workflowConfig({
    name: req.body .name,
    stepConfig:req.body.stepConfig
  });
  WFconfig.save(function (err, response) {
    if (err){
      res.json(500,{
        status:false,
        data:err
      });
    }
    else{
      res.json(200,{
        status:true,
        data:{
          itemId:response._id,
          name:response.name
        }
      });
    }
    
  });
});

router.get('/getall', function(req, res, next) {
  // var WFconfig = new workflowConfig();
  workflowConfig.find(function(err,response){
    if(!err){
      res.json(200,{
        status:200,
        data:response
      });
    }else{
      res.json(500,{
        status:500,
        data:err
      });
    }
  });
});

router.post('/getById', function(req, res, next) {
  // var WFconfig = new workflowConfig();
  workflowConfig.findById(req.body.itemId,function(err,response){
    if(!err){
      res.json(200,{
        status:200,
        data:response
      });
    }else{
      res.json(500,{
        status:500,
        data:err
      });
    }
  });
});

module.exports = router;
