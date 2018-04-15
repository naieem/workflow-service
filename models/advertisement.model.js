var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var advertisement_settings = new Schema({
    configuration: Schema.Types.Mixed,
    instanceId: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var Advertisement = mongoose.model('advertisement', advertisement_settings);

// make this available to our users in our Node applications
module.exports = Advertisement;