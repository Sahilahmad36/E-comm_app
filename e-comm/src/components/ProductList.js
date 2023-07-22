import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom";
const ProductList=()=> {
    const [products,setProducts]=useState([]);
   useEffect(()=>{
   getProducts();
   },[])

   const getProducts= async ()=>{
   let result=await fetch('http://localhost:3002/products',{
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
   });
   result=await result.json();
   setProducts(result);
   }
 

  const deleteProduct=async (id)=>{
     let result =await fetch(`http://localhost:3002/product/${id}`,{
     method:"delete",
     headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
     });
   result =await result.json()
   if(result){
    getProducts();
   }
  
}; 

const searchHandle=async (event)=>{
   let key=event.target.value;
   if(key){
    let result= await fetch(`http://localhost:3002/search/${key}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result=await result.json();
    if(result){
     setProducts(result)
    }
   }else{
    getProducts();
   }
  
  }

  return (
    <div className="product-list">
      <h1>Product list</h1>
      <input className="searchproduct" type="text" placeholder="Search product" 
      onChange={searchHandle}
      />
      <table>
      <tr>
        <th>S. No</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Company</th>
        <th>Operation</th>
      </tr>
      
      {
       products.map((item,index)=>
    <tr key={item._id} >
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>{item.company}</td>
        <td><button onClick={()=>deleteProduct(item._id)} >Delete</button>
        
        <Link to={"/update/"+item._id}>Update</Link>
        </td>
    </tr>
       )
    
      } 
      
      </table>
      
    
      
    </div>
  )
}

export default ProductList;
