import './navbar.css';
import { Link} from 'react-router-dom';
import { useState } from 'react';



const Navbar = () => {
   
     const user = JSON.parse(localStorage.getItem('user'))
     const [showNav, setShowNav ] = useState(false);
   const logoutFun = () => {
       localStorage.clear();
       window.location.replace('/login')
   }
   const handleNavMenu = () => setShowNav(!showNav)

    return (
        <>
              <div className='mobile_nav_items'>
                  <img src="/assets/blogging.png" className='img-fluid site_logo' alt="" />
                  <i onClick={handleNavMenu} className=" navMenuBar fas fa-bars"></i>
              </div>
             <nav className={ showNav ? "nav_container active" : "nav_container"}>
           
     
                    
                    <div className="nav_left">
                    <i className=" topIcon fab fa-facebook-square"></i> <i className=" topIcon fab fa-twitter-square"></i>
                    <i className=" topIcon fab fa-pinterest-square"></i>  <i className=" topIcon fab fa-instagram-square"></i>
                    </div>

                    <div className="nav_center">
                        <ul className="nav_menu" onClick={handleNavMenu}>
                         <Link  to='/' className='nav_link link' >Home</Link>
                         <Link  to='/' className='nav_link link' >About</Link>
                         <Link  to='/' className='nav_link link' >Contact</Link>

                                {
                                 user &&
                                  <>
                            <Link  to='/write' className='nav_link link' >Write</Link>
                            <button  onClick={logoutFun} className='btn btn-primary' >LOGOUT</button>
                                 </>  
                                 
                                }

                        </ul>
                    </div>

                    <div className="nav_right">
                        {
                           user ? (
                                <>
                                
                              <Link className='link' to='/setting'> <p className='topName' onClick={handleNavMenu} >{  user?.username?.charAt(0).toUpperCase()}  </p></Link> 
                                <i className=" topSearchIcon fas fa-search"></i>
                               
                                </>
                            ): (
                                <ul  onClick={handleNavMenu} className="nav_menu">
                                <Link  to='/register' className='nav_link link' >Register</Link>
                                <Link  to='/login' className='nav_link link' >Login</Link>
                                </ul>
                            )
                        }
                       
                    </div>
             </nav>
        </>
    );
};

export default Navbar;