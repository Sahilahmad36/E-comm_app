import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=> {

   const [email,setEmail]=React.useState('');
   const [password,setPassword]=React.useState('');
   const navigate= useNavigate();
   useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    } 
  })

   const handlelogin=async ()=>{
    console.warn("email,password",email, password);
    let result= await fetch('https://e-commerce-app-dggw.onrender.com/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
    console.warn(result)
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate("/") 
    }else{
        alert("Please enter correct details")
    }
   }

  return (
  
    <div className="login">
        <h1>Login</h1>
        <label for="email" className="input-label"></label>
      <input className="input-field" type="text"  placeholder="Enter email"
      onChange={(e)=>setEmail(e.target.value)} value={email}
      />
       <label for="email" className="input-label"></label>
      <input className="input-field" type="password" placeholder="Enter Password"
      onChange={(e)=>setPassword(e.target.password)} value={password}
      />
      <button onClick={handlelogin} className="Button2" type="button">Login</button>
    </div>
  )
}

export default Login;
