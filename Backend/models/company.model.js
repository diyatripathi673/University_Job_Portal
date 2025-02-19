import mongoose from "mongoose";

const CompanySchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    discription:{
        type:String,
        
    },
    website:{
        type:String,
        
    },
    logo:{
        type:String, //url to  company logo
        
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
},{timestamps:true})

export const Company=mongoose.model("Company", CompanySchema);
