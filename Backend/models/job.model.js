import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],  // <-- This makes it an array of strings
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  company:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Company',
    required:true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',  // Assuming you're linking to a Company model
    required: true,
  },
  created_by:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  applications:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Applications'

    }
  ]

},{timestamps:true})

const Job = mongoose.model("Job", jobSchema);

export default Job;
