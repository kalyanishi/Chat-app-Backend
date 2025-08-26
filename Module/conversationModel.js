import mongoose
 from "mongoose";

const conversationModel = new mongoose.Schema({
    participant :[{
        type : mongoose.Schema.Types.ObjectId,
        ref :"user"
    }],
    message: [{
         type : mongoose.Schema.Types.ObjectId,
        ref :"Message"
    }]
},{timestamps:true});
export const conversation = mongoose.model("user",userModel);