const mongoose = require("mongoose");
// schema or models making
// ki jo hamara prson data hai wo dikhega kaise

const personSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,

    },
    work:{
        type: String,
          enum: ["cheif", "Waiter", "manager"],
        required: true,

    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
    }


})
///creating Person model in which we create , read ,update and delete operation perform
const Person = mongoose.model("Person", personSchema);

module.exports = Person;







 