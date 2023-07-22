import React from "react"
import {Link, useNavigate} from "react-router-dom";
const Nav=()=> {

   const auth=localStorage.getItem('user');
   const navigate=useNavigate();
   const logout=()=>{
    localStorage.clear();
    navigate('/signup')
   }

  return (
    
    <div>
    <img
    alt="logo"
    className="logo"
    src="https://cdn.dribbble.com/users/2142371/screenshots/6071364/media/70b33e43515ffae5365f4cf4d9700e59.png" 
    />

     {auth ? <ul className="nav-ul">
        <li className="btn1"><Link to="/">Home Page</Link></li>
        <li className="btn2"><Link to="/add">Add Product</Link></li>
        <li className="btn3"><Link to="/update">Update Product</Link></li>
        <li className="btn4">Profile({JSON.parse(auth).name})</li>
            <li className="btn"><Link onClick={logout} to="/signup">Logout</Link></li>
      </ul>
        :
      <ul className="nav-ul nav-right">
      <li className="btn5"><Link to="/signup">Sign Up</Link></li>
             <li className="btn6"><Link to="/login">Login</Link></li>
      </ul>

     }
    </div>
  
  )
}
export default Nav;
