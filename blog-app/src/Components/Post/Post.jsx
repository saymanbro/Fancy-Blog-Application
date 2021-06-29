import style from './post.module.css';
import { Link } from 'react-router-dom';
const Post = ({blog}) => {
    return (
        <div className='col-sm-12 text-center mt-3 m-md-5 py-3  col-md-6' id={style.post}>
         
           <img src={ blog.photo || '/assets/nature.jpg'} alt="" className={style.postImg} />
            <div className={style.postInfo}>
                <div className={style.postCats}>
                    <span className={style.postCat}> {blog.categories} </span>
                
                    </div>
                  <Link className='link' to={`/post/${blog._id}`}>
                  <span className={style.postTitle}>
                     {blog.title}
                    </span>
                  </Link>
                    <hr />
                    <span className={style.postData}> { new Date(blog.createdAt).toDateString()} </span>
            </div>
              <p className={style.postDesc}> {blog.desc} </p>
          
        </div>
    );
};

export default Post;