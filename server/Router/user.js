import express from 'express';
import bcrypt from 'bcrypt';
import User from '../Schema/user.js';
import Blog from '../Schema/blog.js';
const userRouter = express.Router();


        // update User 


userRouter.put('/:id', async (req, res) => {
     
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password= await bcrypt.hash(req.body.password, salt);
            }
            try {
                    const updateUser = await User.findByIdAndUpdate(req.params.id, {
                        $set: req.body
                    },{ new:true});
                    res.status(200).json(updateUser);
            }catch(err){
                res.status(400).json(err)
            }
     
})




        // delete User 
        userRouter.delete('/:id', async (req, res) => {        
            
                    try {
                        
                             await User.findByIdAndDelete(req.params.id);
                            res.status(200).json({message:'user delete '});
                    }catch(err){
                        res.status(400).json(err)
                    }       
      })
      

            // GET USER 
    userRouter.get('/:id', async (req, res) => {
         
        try{
             const findUser = await User.findById(req.params.id);
             const { password, ...other} = findUser._doc
             res.status(200).json(other);
        }catch(err){
            res.status(500).json({message: err.message})
        }
    })            
      export default userRouter ;
      