import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
const SignUp=()=> {
      const [name,setName]=useState("");
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const navigate=useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem('user')
      if(auth){
        navigate('/')
      } 
    })

      const collectData= async()=>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:3002/post',{
          method:'POST',
          body: JSON.stringify({name,email,password}),
          headers:{
           'Content-Type':'application/json'
          },
        })
        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
           navigate('/')
    
      }
  return (
    <div className="register">

      
      <h1>Register</h1>
      <label for="name" className="input-labels"></label>
      <input className="input-fields" type="text" 
      value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
      
      <label for="name" className="input-labels"></label>
      <input className="input-fields" type="text"
      value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email" />
      
      <label for="name" className="input-labels"></label>
      <input className="input-fields" type="password" 
      value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
    
    <button onClick={collectData} className="Button3" type="button">SignUp</button>
  
    </div>
  )
}
export default SignUp;
