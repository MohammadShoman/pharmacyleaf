const mongoose = require('mongoose');


const Product=new mongoose.Schema({
    productName:{type:String},
    description: { type: String},
    price: { type: String},
    
})
module.exports = mongoose.model('product', Product);

