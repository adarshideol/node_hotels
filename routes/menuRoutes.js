const express = require("express");
const router = express.Router();
const  MenuItem = require("./../models/MenuItem");


router.post("/",  async (req ,res)=>{
    try{
        const data = req.body
        const newMenuItem = new MenuItem(data)
        const Response = await newMenuItem.save();
        console.log("Data Saved of Menu");
        res.status(200).json(Response)
      }catch(err){
        console.log(err);
        res.status(500).json({error: "INternal Server Error"});

      }


})
router.get("/", async (req, res)=>{
    try{
        const data = await MenuItem.find();
        console.log("Data Of Menu is Fetched");
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: "INternal Server Error"});



    }
}) 

// comment added for testing purpose 
module.exports = router;

