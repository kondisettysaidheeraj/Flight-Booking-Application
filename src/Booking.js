import React from 'react'
import { useState } from 'react'
import FlightCard from './FlightCard';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Booking() {
  const[bookingdetails,SetBookingDetails]=useState({"to":'',"from":"","date":""})
 
  const[data,setData]=useState([]);
  const navigate=useNavigate();
  
  let name="",value="";
  function handleInput(e)
  {
    name=e.target.name
    value=e.target.value
    SetBookingDetails({...bookingdetails,[name]:value})
    
  }
  function showFlights(e)
  {
   
e.preventDefault();
fetch(`http://localhost:8081/flightreservation/findflights?arrivalCity=${bookingdetails.to}&departureCity=${bookingdetails.from}&arrivalDate=${bookingdetails.date}  `).then(res=>res.json()).then(res=>{setData(res); })
 


}

  return (
    
<>
<div>
  {data.length===0?
    <div  class="athuntication">
        <form>
          <br/>
          <lable>From City</lable>  <input class="inputborder"  value={bookingdetails.from} name="from" type="text" onChange={handleInput}></input>
           <br/><br/>
           <lable>To City</lable>   <input class="inputborder"  value={bookingdetails.to} name="to" type="text" onChange={handleInput}></input>
           <br/>
           <br/>
           <lable>Date </lable>  <br/> 
             <input  class="inputborder" value={bookingdetails.date} name="date" type="text" onChange={handleInput}></input>
           <br/><br/>
          
             <Button type="submit" value="Submit" variant="primary" size="sm" onClick={showFlights} id="btn2">Find Flights</Button>
           
        </form>
        </div>:''}
    </div>
   
    {
          data.length>0?(<FlightCard items={data}/>):null
        }
       </>
  )
}

export default Booking