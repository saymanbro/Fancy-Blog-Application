import express from 'express';
import bcrypt from 'bcrypt';
import User from '../Schema/user.js';
const authRouter = express.Router();
// Register //

authRouter.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt)
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
            });
           
            const user = await newUser.save();
            res.status(200).json({message:"registration success"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

        // login 
authRouter.post('/login', async (req, res) => {
    try{
         
            const existingUser = await User.findOne({email: req.body.email});
            !existingUser && res.status(400).json('user not found');
           
            const validatePass = await bcrypt.compare(req.body.password, existingUser.password);
            !validatePass && res.status(400).json('wrong Credentials');
             const { password, ...other} = existingUser._doc;
            res.status(200).json(other)
            
    }catch(err){
        console.log(err);
    }
})        
export default authRouter;
