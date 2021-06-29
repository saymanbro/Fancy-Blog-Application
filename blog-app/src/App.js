
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Setting from './pages/Settings/Setting';
import Home from './pages/Home/Home';
import Single from './pages/single/Single';
import Write from './pages/Write/Write';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
     const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Router>
        <Navbar user={user} />
       <Switch>

         <Route exact path='/'> 
         <Home />
         </Route>
        <Route path='/login'> { user ? <Home /> : <Login />} </Route>
        <Route path='/write'> { user ? <Write /> : <Home />} </Route>
        <Route path='/register'> { user ? <Home /> : <Register />} </Route>
        <Route path='/setting'> { user ? <Setting /> : <Register />} </Route>
        <Route path='/post/:postId'>
        <Single />
        </Route>
   
       </Switch>
    </Router>
  );
}

export default App;
