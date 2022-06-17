const mongoose=require("mongoose");

const connect=()=>{
    try{
        
        mongoose.connect("mongodb://localhost:27017/carrental",{useUnifiedTopology: true, useNewUrlParser: true,},()=>{
            console.log("Connected to DB!");
        });
    }
    catch(e){
        console.log(e);
    }
}
module.exports=connect;