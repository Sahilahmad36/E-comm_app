import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const Updateproduct=()=> {
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const params=useParams();
   const navigate=useNavigate();
    useEffect(()=>{
      
        getProductDetails();
    },[])
    
    const getProductDetails=async ()=>{
      console.warn(params)
        let result =await fetch(`https://e-commerce-app-dggw.onrender.com/product/${params.id}`,
        {
          headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        result= await result.json();
        console.warn(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }

    const UpdateProduct=async()=>{
   console.warn(name,price,category,company)
       let result= await fetch(`https://e-commerce-app-dggw.onrender.com/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
          'Content-Type':"application/json",
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }

       
       });
       result=await result.json();
       console.warn(result)
        navigate('/')
       
     
    }
  return ( 
    <div className="update-product">
      <h1>Update Product</h1>
      <center>
        <label className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product name"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
       />
       
       <label className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product price" 
         value={price} onChange={(e)=>{setPrice(e.target.value)}} 
       />
       
       <label className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product category" 
         value={category} onChange={(e)=>{setCategory(e.target.value)}} 
       />
       
       <label className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product company" 
         value={company} onChange={(e)=>{setCompany(e.target.value)}}   
       />
      
       </center>

       <button onClick={UpdateProduct} className="Button4" type="button">Update Product</button>
    </div>
  )
}

export default Updateproduct;
