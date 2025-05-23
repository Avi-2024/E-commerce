import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
   username: {
    type: String,
    require: true
   },
   email:{
    type: String,
    require:true,
   },
   message:{
    type : String,
    require: true
   }
})

export const contactModel = new mongoose.model("Contact", contactSchema);