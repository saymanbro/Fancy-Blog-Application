import Sidebar from '../../Components/Sidebar/Sidebar';
import './Setting.css';
import { useState } from 'react';
import * as api from '../../Api/api';

const Setting = () => {
  const user = JSON.parse(localStorage.getItem('user'));
   const {   username,  _id, profilePicture} = user;
   const [profile, setProfile ] = useState({
    username:username, email:'', password:'', profilePicture:''
   })
   const handleProfile = async (e)=>{
     e.preventDefault();
       try{
            await api.updatedUser(_id, profile);
        
           window.location.replace('/login');
            
            
       }catch(err){
         console.log(err)
       }
   }

   const handleDelete = async (_id) =>{
   
       try{
           await api.deleteUser(_id);
           localStorage.clear()
           window.location.replace('/register');
       }catch(err){
         console.log(err)
       }
   } 
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9">
            <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete" onClick={ () => handleDelete(_id)} >Delete Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleProfile}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src={  profilePicture || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  }
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              
            </div>
            <label>Username</label>
            <input onChange={(e)=> setProfile({...profile, username:e.target.value})} autoComplete='off' value={  username } type="text"  placeholder="Safak" name="name" />
            <label>Email</label>
            <input required onChange={(e)=> setProfile({...profile, email:e.target.value})} autoComplete='off'  value={  profile.email } type="email" placeholder="Your@gmail.com" name="email" />
            <label>Password</label>
            <input required onChange={(e)=> setProfile({...profile, password:e.target.value})} autoComplete='off' type="password" value={profile.password} placeholder="Password" name="password" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
            </div>
            <div className=" d-none d-md-block col-md-3">

              <Sidebar />
            </div>
          </div>
       
      </div>
    );
};

export default Setting;