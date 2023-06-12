import React, { useEffect,useState } from 'react';
import { Link,useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {

    const [user,setUser]=useState({
        engineno:"",
        horsepower:"",
        carmodel:"",
        seaters:"",
        specifications:""
    })

    const {engineno}=useParams();

    useEffect(()=>{
loadUser()
    },[])

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${engineno}`)
        setUser(result.data)
    }


  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Ordered Car Details</h2>

        <div className="CARS">
            <div className="Car-header">
              CARS IN AUTOSTORE : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>ENGINENO: </b>
                    {user.engineno}
                </li>
                <li className="list-group-item">
                    <b>HORSEPOWER:</b>
                    {user.horsepower}
                </li>
                <li className="list-group-item">
                    <b>CARMODEL:</b>
                    {user.carmodel}
                </li>
                <li className="list-group-item">
                    <b>SEATERS:</b>
                    {user.seaters}
                </li>
                <li className="list-group-item">
                    <b>SPECIFICATIONS:</b>
                    {user.specifications}
                </li>
              </ul>
            </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}
