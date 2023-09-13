import express from 'express'
import {getPosts,createPost} from '../controllers/posts.js'

const router = express.Router() // to define sets of routes (URL endpoints) that can be mounted onto an application like => app.use('/api', router); Useful when deadling with multiple routes in the application.

router.get("/",getPosts)
router.post("/",createPost)

export default router