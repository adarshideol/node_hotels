const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        

    },
    Price:{
        type: Number,
        required: true,
         
    },
    taste: {
        type: String,
        enum:["sweet", "Spicy", 'sour'],
        required: true,


       
    },
    is_drink:{
        type: Boolean,
        default: false,//  if client ne kuch bhi nahi bheja tho database me false store ho jayega



    },
    ingredients:{
        type:[String],
        default: []
    },
    num_sales:{
        type:Number,
        default: 0,
    }




})
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;