const mongoose = require("mongoose");

const ewasteSchema = new mongoose.Schema({
	Name: { 
        type: String, 
        required: true, 
    },
    Phone:{
        type: String,
        required: true,
    },
    Address: { 
        type: String, 
        required: true, 
    },
    Ewastedata:{
        type: String,
        required: true,
    },
    Image:{
        type: String,
        required: true,
    }


});


const Ewaste=new mongoose.model('Ewaste',ewasteSchema);
module.exports = Ewaste;