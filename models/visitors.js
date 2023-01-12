const mongoose = require('mongoose');

const { Schema } = mongoose;

const VisitorSchema = new Schema({
    hostname: {
        type: String,
        unique: true
    },
    
    visitors: {
        type: Number,
        default: 0
    }
}, { timestamps:true });

const Visitor=mongoose.model('visitor',VisitorSchema);
  
module.exports=Visitor;