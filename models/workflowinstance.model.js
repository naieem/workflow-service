var mongoose = require('mongoose');
var components = require('./components');
var Schema = mongoose.Schema;

// create workflow schema
var workflowConfig = new Schema({
    name: String,
    stepConfig: [{
        order: String,
        stepTitle: String,
        components: [components]
    }],
    short_description: String,
    profile_img: String,
    advertisementId: { type: Schema.Types.ObjectId, ref: 'advertisement' },
    activeStep: { type: Number, default: 1 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var WFconfig = mongoose.model('workflowinstance', workflowConfig);

// make this available to our users in our Node applications
module.exports = WFconfig;

/*
dummy of schema
{
	"name":"new_game",
	"stepConfig":[
		{
			"order":"1",
			"stepTitle":"Step one",
			"components":[
				{
					"type":"text",
					"model":"website",
					"LabelTitle":"Website",
					"defaultValue":"Naiee Mahmud",
					"width":"100",
					"placholder":"www.placeholder.com"
				},
				{
					"type":"textarea",
					"model":"commet",
					"LabelTitle":"Comment",
					"defaultValue":"Naieem.mahmud",
					"width":"100",
					"placholder":"Comment"
				}
			]
		},{
			"order":"2",
			"stepTitle":"Step two",
			"components":[
				{
					"type":"text",
					"model":"telephone",
					"LabelTitle":"Telephone",
					"defaultValue":"01915819260",
					"width":"100",
					"placholder":"enter telephone number"
				},
				{
					"type":"text",
					"model":"street",
					"LabelTitle":"Street",
					"defaultValue":"23/4",
					"width":"100",
					"placholder":"enter street"
				},
				{
					"type":"textarea",
					"model":"address",
					"LabelTitle":"Address",
					"defaultValue":"midas center dhakesh",
					"width":"100",
					"placholder":"enter address"
				}
			]
		}
	]
}
*/