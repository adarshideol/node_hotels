// console.log("Adarsh")
const express = require('express')
const app = express();
const db = require("./db")
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person"); 
const MenuItem = require("./models/MenuItem" );


/// importes the router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");


app.use("/person", personRoutes);
app.use("/menu", menuRoutes);


// app.get('/', function(req,res){
//     res.send("Hey sir how can i help you")
// })

// app.get('/chicken',(req,res)=>{
//     res.send("sure sir i would love to serve yoi chicken")


// })
// app.get('/idli',(req,res)=>{
//     // making an object
//     var custamized_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
    
//     // res.send("sure sire , i would love to serve idli")
//     res.send(custamized_idli)// getting json object data
// })

// app.post("/person" ,async (req, res) =>{// /person pe koi bhi hume dta bhej tha hai jo formate me humne define kare rakah hai then we save it
// // const data me data mile raha hai
//     // const data  = req.body// Assuming the request body contains the person data
//     // // huume person ka data mile chuka hai hume ak data  banaeyenge jo person tarah ka hoga

//     // const newPerson = new Person(data);// newperson ke ander sare inerit ho gaya Person ka 

//     // // Save new person to the database

//     // newPerson.save((error, savedperson) =>{
//     //     if(error) {
//     //         console.log("Error saving person:" , error);
//     //         res.status(500).json({error: "Internal server error"})
//     //     }else{
//     //         console.log("Data Save successfully");
//     //         res.status(200).json(savedperson);
//     //     }
//     // })

//     // now by using async await
//     try{

    
//     const data = req.body
//     const newPerson = new Person(data);

//     const response  = await newPerson.save();
//     console.log("Data Saved");
//     res.status(200).json(response);
//     }
// catch(err){
//     console.log(err);
//     res.status(500).json({error: "Internal Server Error"});


// }

// })

// get method to get the Person = is bare hume data chaiye send nahi karna hai
// means data nikalena hai database se
// app.get("/person",async  (req, res) =>{
//     try{
//         const  data =  await Person.find();
//         console.log("data Fetched");
//         res.status(200).json(data);
//     }catch (err){ 
//         console.log(err);
//         res.status(500).json({error: "Internal Server Error"});

//     }


// })


// app.post("/menu",  async (req ,res)=>{
//     try{
//         const data = req.body
//         const newMenuItem = new MenuItem(data)
//         const Response = await newMenuItem.save();
//         console.log("Data Saved of Menu");
//         res.status(200).json(Response)
//       }catch(err){
//         console.log(err);
//         res.status(500).json({error: "INternal Server Error"});

//       }


// })
// app.get("/menu", async (req, res)=>{
//     try{
//         const data = await MenuItem.find();
//         console.log("Data Of Menu is Fetched");
//         res.status(200).json(data);

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "INternal Server Error"});



//     }
// })

/// Parametrized API call
// app.get("/person/:workType" ,async (req, res)=>{
//     try{
//     const workType = req.params.workType;/// Extract the workType from the URL parameter
//     if(workType == 'cheif'|| workType == 'manager' || workType == 'Waiter'){
//         const  response1 = await Person.find({work: workType});
//         console.log("Response Fetched");
//         res.status(200).json(response1);

//     }else{
//         res.status(404).json({error: "Invalid work Type"})
//     }
// }catch(err){
//     console.log(err);
//     res.status(500).json({error: "Internal Server Error"});

// }
// })


app.listen(3005, ()=>{
    console.log("listening on port 3005");// becouse we wante to check our server is liv or not
})
console.log("adarsh")
