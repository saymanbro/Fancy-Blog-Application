import express from 'express';

import User from '../Schema/user.js';
import Blog from '../Schema/blog.js';
const blogRouter = express.Router();
import mongoose from 'mongoose'

    // GET A POST 
blogRouter.get('/:id', async (req, res) =>{
     try{
            const findBlog = await Blog.findById(req.params.id);
            res.status(200).json(findBlog)
     }catch(err){
        res.status(500).json({message: err.message})
     }
})    

        // Get all Blog 
        blogRouter.get('/', async (req, res) =>{
            const username = req.query.user;
            const catName = req.query.cat;
           

            try{
                let blog;
                if(username){
                    blog = await Blog.find({username})
                }else if(catName){
                    blog = await Blog.find({category})
                }else{
                    blog = await Blog.find();                  
                }
                  
                   res.status(200).json(blog);
                  
            }catch(err){
               res.status(500).json({message: err.message})
            }
       })    
       

    // CRETE POST
blogRouter.post('/', async(req,res) => {
    const blog = req.body;
      try{
                const newBlog = await new Blog(blog);
                await newBlog.save();
                res.status(200).json('blog created Successfully')
      }catch(err){
          res.status(500).json({message: err.message})
      }
})

        // UPDATE blog 
blogRouter.put('/:id', async (req, res) => {
               
        // try {
        //      const updateBlog = await Blog.findByIdAndUpdate(req.params.id, {
        //          $set:req.body
        //      }, {new:true})
        //      res.status(200).json(updateBlog)
        // }catch(err){
        //   res.status(500).json({message: err})
        // }
        const { id:_id } = req.params; 
                    console.log(_id)
        const blog = req.body;
       try{
       
       
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send({message:'not post with that id'})
        const updatedBlog = await Blog.findByIdAndUpdate(_id, {...blog, _id}, {new: true})
        res.json(updatedBlog)
       }catch(e){
           console.log('the error' + e);
       }
   
})        

blogRouter.delete('/:id', async (req, res) => {
   try{
    const post = await Blog.findById(req.params.id);
    
        
           try{
        
                await post.delete();
                res.status(200).json({message: 'blog deleted successfully'})
           }catch(err){
            res.status(500).json({message: err.message})
           }

   
   }catch(err){
       res.status(500).json({message: err.message})
   }
     
})        





export default blogRouter;