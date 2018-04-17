var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// creating component schema
var COMPONENTS = new Schema({
    c_type: String, // ex:input,textarea,list_with_image_datepicker,range,radio,checkbox
    model: String, // the one which i will use in the input model binding and it will be saved as new games configuration
    LabelTitle: String,
    width: String, // ex:half,full,one-third,one-fourth
    DefaultImage: String,
    defaultValue: Schema.Types.Mixed,
    DefaultCheckboxValue: Boolean, // needed for checkbox fields
    optionsList: [{
        imgLink: String,
        labelText: String,
        value: Schema.Types.Mixed,
    }],
    minValue: Number,
    maxValue: Number,
    stepDiff: Number,
    placholder: String
});

module.exports = COMPONENTS;