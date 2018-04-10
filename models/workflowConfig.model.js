var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var workflowConfig = new Schema({
  name: String,
//   information: Schema.Types.Mixed,
  stepConfig:  [
     {
        order :String,
        stepTitle:String,
        components:[
            {
                name:String,
                LabelTitle:String,
                defaultValue:String,
                width:String,
                options:[Schema.Types.Mixed]
            }
        ]
    }
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var WFconfig = mongoose.model('WFCONFIG', workflowConfig);

// make this available to our users in our Node applications
module.exports = WFconfig;

/*
dummy of schema
{
	"name":"flappy_game",
	"stepConfig":[
		{
			"order":"1",
			"stepTitle":"Step one",
			"components":[
				{
					"name":"input",
					"LabelTitle":"Owner Name",
					"defaultValue":"Naiee Mahmud Supto",
					"width":"100"
				},
				{
					"name":"text",
					"LabelTitle":"Email",
					"defaultValue":"Naieem.mahmud@selise.ch",
					"width":"100"
				},
				{
					"name":"list_with_image",
					"options":[
						{
							"name":"car1",
							"value":"car1",
							"imageurl":"http://something.com"
						},
						{
							"name":"car2",
							"value":"car2",
							"imageurl":"http://something1.com"
						}
					],
					"defaultValue":"car2",
					"width":"50"
				},
				{
					"name":"game_sound",
					"options":[
						{
							"name":"car1",
							"value":"car1",
							"soundurl":"http://something.com"
						},
						{
							"name":"car2",
							"value":"car2",
							"soundUrl":"http://something1.com"
						}
					]
				}
			]
		},{
			"order":"2",
			"stepTitle":"Step two",
			"components":[
				{
					"name":"input",
					"LabelTitle":"game url",
					"defaultValue":"http://something.com",
					"width":"100"
				},
				{
					"name":"list_with_image",
					"options":[
						{
							"name":"car1",
							"value":"car1",
							"imageurl":"http://something.com"
						},
						{
							"name":"car2",
							"value":"car2",
							"imageurl":"http://something1.com"
						}
					],
					"defaultValue":"car2",
					"width":"50"
				}
			]
		}
	]
}
*/