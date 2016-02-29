var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('Item', {
    user: {type : Schema.Types.ObjectId, ref : 'user'},
    desc: String,
    value: Number,
    type: String
});
