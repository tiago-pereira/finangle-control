var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('Stock', {
    code: String,
    user: {type : Schema.Types.ObjectId, ref : 'user'},
    name: String,
    quantity: Number,
    buyDate: {type: Date, default: Date.now},
    sellDate: Date,
    buyValue: Number,
    sellValue: Number,
    options: [
        {
          code: String,
          type: String,
          quatity: Number,
          buyDate: Date,
          buyValue: Number,
          sellValue: Number,
          sellDate: Date,
          strike: Number,
          strikeDate: Date,
        }
    ]
});
