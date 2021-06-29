import React from 'react'
import { useSelector } from 'react-redux';
import './sidebar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const categories = useSelector(state=> state.Category);

    return (
        <div className='sidebar'>
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span> 
               <img src="/assets/life.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel, eius expedita eos facilis voluptatem earum iure quaerat at quae?</p>

           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">CATAGORIES</span>
               <ul className="sidebarList">
                   {
                       categories.map(cat=>(
                           <div  key={cat._id}>


                        <Link to={`/?cat=${cat.name}`}>   <li className="listItem"> {cat.name} </li></Link>
                           </div>
                       ))
                   }
               
               </ul>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">FOLLOW US</span>
               <div className="sidebarSocial">
               <i className=" topIcon fab fa-facebook-square"></i> 
               <i className=" topIcon fab fa-twitter-square"></i>

                <i className=" topIcon fab fa-pinterest-square"></i>
              <i className=" topIcon fab fa-instagram-square"></i>
               </div>
           </div>
        </div>
    );
};

export default React.memo(Sidebar);