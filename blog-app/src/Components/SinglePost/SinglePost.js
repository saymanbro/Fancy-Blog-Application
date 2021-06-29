import './singlepage.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../Actions/action';
import { useHistory } from 'react-router-dom';
const SinglePost = ({ singleBlog}) => {
    const history = useHistory();
    const user= JSON.parse(localStorage.getItem('user'));
    const {title, username, desc, category, createdAt , _id,photo} = singleBlog;
    const dispatch = useDispatch();
   const handleDelete = () =>{
       dispatch(deleteBlog(_id));
       window.location.replace('/')
   }

    return (
        <div className='singlePost'>
             <div className="singleWrapperPost">
                 <img src={ photo || '/assets/nature.jpg'} alt="" className="singlePImg" />
                 <h1 className="singlePostTitle"> {title}
                    {
                        username === user?.username && (
                             <div className="singlePostIcon">
                     
               <span className=' singlePostIcons' >
                    <i className=" fas fa-trash-alt" onClick={handleDelete}></i>
             </span>
            <span className='singlePostIcons' >
            <i className=" fas fa-edit" onClick={()=> history.push(`/write/${_id}`)}></i>
            </span>

                 </div>
                        )
                    }
                </h1>
                 <div className="singlePostInfo">
                  <Link to={`/?user=${username}`} className='link'>
                  <span className="singlePostAuthor">Author: <b>{username}</b> </span>
                  </Link>
                     <span className="singlePostDate"> {new Date(createdAt).toDateString()}  </span>
                    
                 </div>
                 <b className="ms-3 text-info"> category: {category}</b>
                 <p> {desc} </p>
             </div>
        </div>
    );
};

export default SinglePost;