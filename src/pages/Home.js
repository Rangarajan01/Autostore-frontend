import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import "./Home.css"
export default function Home() {

    const [user,setUsers]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">ENGINENO</th>
      <th scope="col">HORSEPOWER</th>
      <th scope="col">CARMODEL</th>
      <th scope="col">SEATERS</th>
      <th scope="col">SPECIFICATIONS</th>
      <th scope="col">ACTIONS</th>
    </tr>
  </thead>
  <tbody>

    {
        user.map((user,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.engineno}</td>
      <td>{user.horsepower}</td>
      <td>{user.carmodel}</td>
      <td>{user.seaters}</td>
      <td>{user.specifications}</td>
      <td>
        

        <Link className="btn btn-outline-primary mx-2"
        to={`/edituser/${user.engineno}`}
        >Edit</Link>
        <Link className="btn btn-primary mx-2"
        to={`/viewuser/${user.engineno}`}
        >View</Link>
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteUser(user.engineno)}
        >Delete</button>


      </td>
    </tr>
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
} 
