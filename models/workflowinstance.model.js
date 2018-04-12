var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var workflow_instance_settings = new Schema({
    configuration: Schema.Types.Mixed,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var WFInstanctConfig = mongoose.model('workflowinstance', workflow_instance_settings);

// make this available to our users in our Node applications
module.exports = WFInstanctConfig;