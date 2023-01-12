const mongoose = require('mongoose');

const { Schema } = mongoose;

const VisitorSchema = new Schema({
    hostname: {
        type: String,
        unique: true
    },
    
    visitors: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps:true });

const Visitor = mongoose.model('visitor', VisitorSchema);
  
module.exports = Visitor;