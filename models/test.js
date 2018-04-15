var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
// var test = new Schema({
//     name: String,
//     //   information: Schema.Types.Mixed,
//     stepConfig: [{
//         order: String,
//         stepTitle: String,
//         components: [{
//             category: String,
//             model: String,
//             LabelTitle: String,
//             defaultValue: String,
//             width: String,
//             placholder: String
//         }]
//     }],
//     created_at: { type: Date, default: Date.now },
//     updated_at: { type: Date, default: Date.now },
//     test: { type: Schema.Types.ObjectId, ref: 'test1' }
// });

var test = new Schema({
    name: String,
    email: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    test_id: { type: Schema.Types.ObjectId, ref: 'test1' }
});

// the schema is useless so far
// we need to create a model using it
var WFconfig = mongoose.model('test', test);

// make this available to our users in our Node applications
module.exports = WFconfig;