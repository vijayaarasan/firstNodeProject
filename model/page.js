let  mongoose = require('mongoose');
const Schema = mongoose.Schema;
let uniqueValidator = require('mongoose-unique-validator');
let autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

let pageSchema = new Schema({
    count: { type: Number, required: true },
    cost: { type: Number, required: true }
}, { timestamps: true });

pageSchema.plugin(autoIncrement.plugin, {
    model: 'page',
    field: 'serialNo',
    startAt: 1
});

pageSchema.plugin(uniqueValidator);

let pageDetails = mongoose.model('page', pageSchema, 'page');
module.exports = pageDetails;
