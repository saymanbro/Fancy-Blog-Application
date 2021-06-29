import './register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as api from '../../Api/api';
const Register = () => {

  const [ error, setError ] = useState(false);
  const [ info, setInfo ] = useState({
     username:'', email:'', password:''
  });

  const handleChange = (e) =>{

    setInfo({...info, [e.target.name]: e.target.value});
  }
  const handleRegistration = async  (e) =>{
      e.preventDefault();
      setError(false)
       try{
            const {data} =  await api.userRegistration(info);
              data && window.location.replace('/login')
       }catch(err){
         setError(true)
       }
  
    
  }
    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleRegistration}>
          <label>Username</label>
          <input type='text'  onChange={handleChange} required value={info.username} name='username' className="registerInput" placeholder="Enter your username..." />
          <label>Email</label>
          <input type='email'  onChange={handleChange} required value={info.email} name='email' className="registerInput"  placeholder="Enter your email..." />
          <label>Password</label>
          <input type='password'  onChange={handleChange} required minLength='6' value={info.password} name='password' className="registerInput"  placeholder="Enter your password..." />
          <button className="registerButton" type='submit'>Register</button>
        </form>
          <Link to='/login'><button className="registerLoginButton">Login</button></Link>
          { error &&  <span className="text-danger mt-3 fw-bold">Something went wrong</span>}
      </div>
    );
};

export default Register;