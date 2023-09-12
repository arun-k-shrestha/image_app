import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

import postRoutes from "./routes/posts.js"

const app = express()

app.use("/posts",postRoutes)

//bodyParser.json -> for Jason data
//bodyParser.urlencoded -> for HTML form data
app.use(bodyParser.json({limit:"25mb",extended:true})) // limiting the size of our image to 25mb
app.use(bodyParser.urlencoded({limit:"25mb",extended:true}))
app.use(cors()) // CORS is a security feature implemented by web browsers to prevent web pages from making requests to domains other than the one that served the web page.


const CONNECTION = "mongodb+srv://arunkaji6:arunkaji6@cluster0.d2924w7.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000  // dynamic port configuration based on the PORT environment variable or a default value of 5000.
                                        // useful when deploying the application to different hosting platforms where the port may vary.

mongoose.connect(CONNECTION,{useNewUrlParser:true, useUnifiedTopology:true })
.then(()=>app.listen(PORT,()=> console.log("Port running at "+PORT)))
.catch((error)=>console.log(error.message))

//mongoose.set("useFindAndModify",false) // By setting "useFindAndModify" to false, you are telling Mongoose to use the newer and more efficient MongoDB updateOne() and deleteOne()





//https://www.mongodb.com/atlas/database