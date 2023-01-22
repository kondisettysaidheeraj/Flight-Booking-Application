import React from 'react'
import { Link } from 'react-router-dom'
import './FlightBooking.css';
import Button from 'react-bootstrap/Button';


function Athuntication() {
   
  return (
    <div>
      <br/><br/>
        <h1 id="id1">
        Welcome to Flight Booking Application
      </h1>
      <div class="athuntication">
      
      <Link to={"/login"}> <Button   size="sm" active  id="login">Login</Button></Link>
      <Link to={"/singup"}><Button  size="sm" active id="singup">Signup</Button></Link>
      
    
      </div>
    </div>
  )
}

export default Athuntication