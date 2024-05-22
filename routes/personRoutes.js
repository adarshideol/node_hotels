const express = require("express");
const router = express.Router();// Express router

const  Person = require("./../models/Person");

router.post("/", async (req, res) =>{
    try{

    
        const data = req.body
        const newPerson = new Person(data);
    
        const response  = await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response);
        }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    
    
    }
    
})


router.get("/",async  (req, res) =>{
    try{ 
        const  data =  await Person.find();
        console.log("data Fetched");
        res.status(200).json(data);
    }catch (err){ 
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});

    }


})

router.get("/:workType" ,async (req, res)=>{
    try{
    const workType = req.params.workType;/// Extract the workType from the URL parameter
    if(workType == 'cheif'|| workType == 'manager' || workType == 'Waiter'){
        const  response1 = await Person.find({work: workType});
        console.log("Response Fetched");
        res.status(200).json(response1);

    }else{
        res.status(404).json({error: "Invalid work Type"})
    }
}catch(err){
    console.log(err);
    res.status(500).json({error: "Internal Server Error"});

}
})


// updation in Person document
router.put("/:id", async (req, res) =>{
    try{
        const personId = req.params.id;// exteact id 
        const updatedPersonData = req.body;// Updated data from person
        const  response = await Person.findByIdAndUpdate(personId , updatedPersonData , {
            new: true,// return the updated document 
            runValidators: true,// Run Mongoose Validations

        })
        if(!response){// when client jo id bheja wo hai hi nahi
            return res.status(404).json({error: "Person not found"});

        }
        console.log("Data Updated");
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});

    }
} )


router.delete("/:id", async (req, res)=>{
    try{
        const deletePersonId = req.params.id;

        const response = await Person.findByIdAndDelete(deletePersonId);

        if(!response) {
            return res.status(404).json({error: "Person not found"});

        }
        console.log("Data is Deleted");
        res.status(200).json({message: "person Deleted Successfully"});


    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});



    }
})
module.exports = router;