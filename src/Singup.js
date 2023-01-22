import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Booking from './Booking';
import { Button } from 'react-bootstrap';

function Singup() {
  const[singupdetails,SetSingupDetails]=useState({"firstName":"","lastName":"","userEmail":"","pasword":""})
  const [data,setData]=useState({});
  const [count,setCount]=useState(false);
  const navigate = useNavigate();
  

  let  name="",value="";
function handleInput( e)
  {
    name=e.target.name
     value=e.target.value
     SetSingupDetails({...singupdetails,[name]:value})

  }
  function call(e) {
    e.preventDefault();
    axios.post('http://localhost:8081/flightreservation/signup',singupdetails).then(res=>{
      let data =res.data;
      setData(data);
      if(res.status===200)
      navigate("/login")
      SetSingupDetails({"firstName":"","lastName":"","userEmail":"","pasword":""})
      })

    }

  
  return (
    <div>
    <div class="athuntication1">
        
        <form>
          <br/>
     <label>First Name</label>     <input class="inputborder" value={singupdetails.firstName} onChange={handleInput}  name="firstName" type="text"></input><br/><br/>
     <label>Last Name</label>      <input class="inputborder" value={singupdetails.lastName}  onChange={handleInput}  name="lastName" type="text"></input><br/><br/>
     <label>Email</label>    <br/>      <input class="inputborder"  value={singupdetails.userEmail}  onChange={handleInput} name="userEmail" type="email"></input><br/><br/>
     <label>password</label>       <input  class="inputborder" value={singupdetails.pasword}  onChange={handleInput}  name="pasword" type="password"></input><br/><br/>
            <Button variant="primary" size="sm" id="btn3" type="submit" onClick={call}>Singup </Button>
        </form>
    </div>
    </div>
  )
}

export default Singup