import Post from '../Post/Post.jsx';
import './posts.css';
import React from 'react'
import { useSelector } from 'react-redux';

const Posts = () => {
   
   
    const blog = useSelector(state=> state.Blog);
    

    return (
      
            <div className="container-fluid p-0 " style={{ background:" #fbf2f4"}}>
            <div className="row  justify-content-around">

            {
                !blog.length ? <div>
                  <h1 className="text-center mt-5">Loading.....</h1>
                </div> :(
            
                blog.map(b=>(
                      
                    <Post key={b._id} blog={b} />
                ))
                )
            }
            </div>
            </div>
        
       
    );
};

export default React.memo(Posts);