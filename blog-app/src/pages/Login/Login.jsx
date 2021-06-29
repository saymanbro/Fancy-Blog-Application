import './login.css';
import { Link } from 'react-router-dom';
import {useState } from 'react';

import * as api from '../../Api/api';

const Login = () => {

   const [error, setError] = useState(false)
  const [logInfo, setLogInfo ] = useState({
    email:'', password:''
  });

 


  const handleLogin = async  (e)=>{
    e.preventDefault();
    setError(false)
   
    try{
     const { data }  = await api.loginUser(logInfo)
     
      if(data){
        localStorage.setItem('user', JSON.stringify(data));
        window.location.replace('/')
      }
        
    }catch(err){
       setError(true)
    }

  }



    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleLogin}>
          <label>Email</label>
          <input required name='email' onChange={(e)=> setLogInfo({...logInfo, email:e.target.value})} className="loginInput" type="email" placeholder="Enter your email..." />
          <label>Password</label>
          <input required name='password' onChange={(e)=> setLogInfo({...logInfo, password:e.target.value})} className="loginInput" type="password" placeholder="Enter your password..." />
          <button className="loginButton" type="submit">Login</button>
        </form>
         <Link to='/register'> <button className="loginRegisterButton">Register</button></Link>
         { error &&  <span className="mt-5 text-danger">Enter Correct Email and Password</span> }
      </div>
    )
};

export default Login;