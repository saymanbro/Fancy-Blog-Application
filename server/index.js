import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import './DB/db.js';

import authRouter from './Router/auth.js';
import userRouter from './Router/user.js';
import blogRouter from './Router/blog.js';
import categoryRouter from './Router/categories.js';


const   PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth',authRouter)
app.use('/user', userRouter)
app.use('/blog', blogRouter)
app.use('/category', categoryRouter)


app.get('/', (req, res) =>{
    res.send('good afternoon')
})


app.listen(PORT, ()=> console.log(PORT)); 
