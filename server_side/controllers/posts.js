import PostMessage from "../models/postMessage.js"

// Async/await helps with asynchronous code which doesn't run immediately and may take some time to complete.
// await keyword means to "wait" for the completion of an asynchronous operation
export const getPosts = async function(req,res){
   try {
        const postmessages = await PostMessage.find() // PostMessage.find() takes time to load.
        res.status(200).json(postmessages)
   } catch (error) {
        res.status(404).json({message: error.message})
   }
}

export const createPost = (req,res) =>{
    res.send("This works too")
}


