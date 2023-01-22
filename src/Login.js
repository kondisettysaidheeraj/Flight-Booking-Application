import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login() {
  const[logindetails,SetLoginDetails]=useState({"email":"","password":""})
  const[validate,SetValidate]=useState("");
  const navigate=useNavigate();
  let name="",value="";
  function handleInput(e)
  {
   
name=e.target.name;

value=e.target.value;

SetLoginDetails({...logindetails,[name]:value})


  }
  function check(e)
  {
    e.preventDefault();
    fetch(`http://localhost:8081/flightreservation/login?email=${logindetails.email}&password=${logindetails.password}`).then(response=>response.json()).then((res)=>{if(res==true)
  {
     navigate('/Booking');
  }
  else
  {
    SetValidate("Incorrect Username or password")
  }
  })
  }
  return (
    <div>
      
      <h4 id="invalid">{validate}</h4> 
    <div class="athuntication">
        <form ><br/><br/>
        <label>Enter your email</label> <input class="inputborder"  type="email" name='email' onChange={handleInput} value={logindetails.value} ></input> <br/><br/>
        <label>Enter your password</label> <input class="inputborder" type="Password" name="password" onChange={handleInput}></input> <br/><br/><br/>
        <Button type="submit" value="Submit" variant="primary" size="sm" onClick={check} id="btn1">Login</Button>  
        </form>
 
    </div>
    </div>
  )
}

export default Login