var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var test1 = new Schema({
    testname1: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var WFconfig = mongoose.model('test1', test1);

// make this available to our users in our Node applications
module.exports = WFconfig;