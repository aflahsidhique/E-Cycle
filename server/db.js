const mongoose = require('mongoose');

module.exports = () => {
    try{
        mongoose.connect(process.env.DB);
        console.log("Connected to Mongoose database")
    }catch(error){
        console.log(error);
        console.log("Connection error");
    }
}