import mongoose from mongoose;

const messageModel = new mongoose.schema({
    senderId : {
        type:mongoose.schema.Type.ObjectsId,
        ref:"user",
        required :true
    },
    receiver:{
        type:mongoose.schema.Type.ObjectsId,
        ref:"user",
        required :true
    },
    message :{
        type :String,
        required:true
    }
});
export const Message = mongoose,model("Message", messageModel);