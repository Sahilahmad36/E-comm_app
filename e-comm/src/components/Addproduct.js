import React from "react";


const Addproduct=()=> {
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const [error,setError]=React.useState(false);
    

    const addProduct=async()=>{
       
         console.warn(!name);
         if(!name || !price || !category || !company)
         {
         setError(true)
         return false;
         }

       
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch('http://localhost:3002/addproduct',{
          method:'post',
          body:JSON.stringify({name,price,category,company,userId}),
          headers:{
            "Content-Type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        result=await result.json();
        console.warn(result);
      
       
    }
  return ( 
    <div className="product">
      <h1>Add Product</h1>
       <label for="product" className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product name"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
       />
       {error && !name && <span className="invalid">Enter valid name</span>}

       <label for="product" className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product price" 
         value={price} onChange={(e)=>{setPrice(e.target.value)}} 
       />
       {error && !price && <span className="invalid">Enter valid price</span>}

       <label for="product" className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product category" 
         value={category} onChange={(e)=>{setCategory(e.target.value)}} 
       />
       {error && !category && <span className="invalid">Enter valid category</span>}

       <label for="product" className="input-label1"></label>
       <input className="input-field1" type="text" placeholder="Enter product company" 
         value={company} onChange={(e)=>{setCompany(e.target.value)}}   
       />
       {error && !company && <span className="invalid">Enter valid company</span>}
       

       <button onClick={addProduct} className="Button4" type="button">Add Product</button>
    </div>
  )
}

export default Addproduct;
