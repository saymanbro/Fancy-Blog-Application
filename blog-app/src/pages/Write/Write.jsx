import { useState , useEffect} from 'react';
import'./write.css';
import FileBase from 'react-file-base64';
import { createBlog, updatedBlog } from '../../Actions/action';
import { useDispatch , useSelector} from 'react-redux';
import {  useLocation } from 'react-router-dom'

const Write = () => {

    const user = JSON.parse(localStorage.getItem('user'));
      const {username} = user;
      const dispatch = useDispatch();
    const [ blog, setBlog ] = useState({
        username:username, title:'', desc:'', categories:'',photo:''
    })

  const location = useLocation();
  const path = location.pathname.split('/')[2];
 
 
  const updateBlog = useSelector(state=> path ? state.Blog.find(b=> b._id === path) : null);
 

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(path){
            dispatch(updatedBlog(path,blog));
             window.location.replace('/')
        }else(

            dispatch(createBlog(blog))
           
            )
            clear();
       
    }
    const clear = () =>{
       
        setBlog({  username:'', title:'', desc:'', category:'',photo:''})
    }

    useEffect(()=>{
      if(updateBlog) setBlog(updateBlog)
    }, [updateBlog])
    return (
        <div className='write'>
          <img src="/assets/nature.jpg" className='writeImg' alt="" />
            <form onSubmit={handleSubmit} className="writeForm">
           
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" add fas fa-plus"></i>
                    </label>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setBlog({ ...blog, photo: base64 })} />
                    <input  value={blog.title} required onChange={(e)=> setBlog({...blog, title:e.target.value})} type="text" placeholder="Title" className='writeInput' autoComplete="off" autoFocus={true} /> <br />
                    <input value={blog?.category} required  onChange={(e)=> setBlog({...blog, category:e.target.value})} type="text" placeholder="Category" className='writeInput' autoComplete="off"  />
                </div>
                <div className="writeFormGroup">
                    <textarea value={blog.desc} required  onChange={(e)=> setBlog({...blog, desc:e.target.value})} placeholder='Tell Your Story  Us ...' className="writeInputArea"></textarea>
                   
                </div>
                <button className="writeBtn" type="submit">Publish</button>
            </form>
        </div>
    );
};

export default Write;