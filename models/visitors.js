const mongoose = require('mongoose');

const { Schema } = mongoose;

const VisitorSchema = new Schema({
    visitors: {
        type: Number,
        required: true,
        default: 0
    }
});

const Visitor = mongoose.model('visitor', VisitorSchema);
  
module.exports = Visitor;