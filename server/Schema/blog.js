import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
        
    },
    photo:{
        type:String,
        
    },
    username:{
        type:String,
        required:true
    },
    category:{
        type: String
    }
         

},
 { timestamps: true}
)
const Blog = new mongoose.model("Blog", blogSchema);
export default Blog;