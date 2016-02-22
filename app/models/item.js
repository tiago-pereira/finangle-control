var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    desc: String,
    value: Number
});
