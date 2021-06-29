import './single.css';
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
 import SinglePost from '../../Components/SinglePost/SinglePost.js';

import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

const Single = () => {

    const location = useLocation();
    const path = location.pathname.split('/')[2];
    
    const singleBlog = useSelector(state=> state?.Blog.find(b=> b._id === path))
    

   
    return (
        <div className='container-fluid'>
             <div className="row">
                 <div className="col-md-9 bg-light p-4 p-md-2">

            <SinglePost singleBlog={singleBlog} />
                 </div>
                 <div className="col-md-3 d-none d-md-block">

          <Sidebar />
                 </div>
             </div>
        </div>
    );
};

export default Single;