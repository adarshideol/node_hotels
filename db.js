const mongoose = require("mongoose");

const mongoURl = "mongodb://127.0.0.1:27017/hotels"

mongoose.connect(mongoURl , {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
const db = mongoose.connection;// mongoose default connection object banata hai
// and that obj responisble for kisi database me perform karne ke liye
//this object is what you will to handle events and interact with the database
// EVENT LISTNER 
db.on("connected", () =>{
    console.log("Connected To mongodbserver");
})

db.on("error", (err) =>{
    console.log("error in  mongodbserver" , err);
})

db.on("disconnected", () =>{
    console.log("disConnected To mongodbserver");
})


module.exports = db;