import express from 'express';
import Category from '../Schema/category.js';
const categoryRouter = express.Router();

categoryRouter.post('/', async (req, res) => {
     const  category = new Category(req.body);
     try{
            const newCategory =  await category.save();
            res.status(200).json(newCategory)
     }catch(e){
         res.status(500).json({message: e.message});
     }
})

categoryRouter.get('/', async (req, res) => {
   
    try{
           const newCategory =  await Category.find();
           res.status(200).json(newCategory)
    }catch(e){
        res.status(500).json({message: e.message});
    }
})
export default categoryRouter;