import mongoose from "mongoose";

//a Schema is a blueprint in a MongoDB collection. It defines the properties of each document.
const messageSchema = mongoose.Schema({
    title:String,
    message: String,
    createrInfo: String,
    tags: [String],
    selectedFile:String,
    like:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }

})

const PostMessage = mongoose.model('PostMessage',messageSchema)

export default PostMessage