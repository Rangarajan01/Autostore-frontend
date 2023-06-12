import React,{ useEffect, useState} from 'react';
import axios from "axios";
import { Link,useNavigate,useParams } from "react-router-dom";

export default function EditUser() {

   let navigate=useNavigate()

   const {engineno}=useParams()

   const [user,setUser]=useState({
       engineno:"",
       horsepower:"",
       carmodel:"",
       seaters:"",
       specifications:""
   })

   const{horsepower,carmodel,seaters,specifications}=user

   const onInputChange=(e)=>{

       setUser({ ...user, [e.target.name]:e.target.value});

   };

   useEffect(()=> {
    loadUser();
   },[]);

   const onSubmit= async (e)=>{
       e.preventDefault();
       await axios.put(`http://localhost:8080/user/${engineno}`,user)
       navigate("/"); 
   };

   const loadUser =async ()=>{
    const result=await axios.get(`http://localhost:8080/user/${engineno}`)
    setUser(result.data)
   }

  return (
    <div className="container">
       <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Customize Your Own Cars</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                 <div className="mb-3">
                   <lable htmlFor="Engineno" className="form-label">
                       Engine
                   </lable>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter the engineno"
                   name="engineno"
                   value={engineno}
                   onChange={(e)=>onInputChange(e)}/>
                 </div> 
                 <div className="mb-3">
                   <lable htmlFor="Horsepower" className="form-label">
                       Horse power
                   </lable>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter top speed"
                   name="horsepower"
                   value={horsepower}
                   onChange={(e)=>onInputChange(e)}/>
                 </div> 
                 <div className="mb-3">
                   <lable htmlFor="Carmodel" className="form-label">
                       Car Model
                   </lable>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter the type & brand"
                   name="carmodel"
                   value={carmodel}
                   onChange={(e)=>onInputChange(e)}/>
                 </div>  
                 <div className="mb-3">
                   <lable htmlFor="Seatings" className="form-label">
                       Seatings
                   </lable>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter total occupation"
                   name="seaters"
                   value={seaters}
                   onChange={(e)=>onInputChange(e)}/>
                 </div>  
                 <div className="mb-3">
                   <lable htmlFor="Specifications" className="form-label">
                       specification
                   </lable>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter Customers Willing "
                   name="specifications"
                   value={specifications}
                   onChange={(e)=>onInputChange(e)}/>
                 </div> 
                 <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                 <button type="submit" className="btn btn-outline-primary">UPGRADE</button>
                 </form>
           </div>
       </div>
    </div>
  );
}
