import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
})
.then(()=>{
    console.log('connect to DB Success')
})
.catch(err=>{
    console.log('error in db' + err);
})
mongoose.set('useFindAndModify', false);