import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import BookingSucessful from './BookingSucessful';
import { Button } from 'react-bootstrap';


function Passenger() {
  const[passenerdetails,SetPassengerDetails]=useState({"passengerName":'',"age":"","additionalInformation":""})
  const[serachParams]=useSearchParams();
  const navigate=useNavigate();
  let flightId=serachParams.get("flightId");

 
  let name="",value="";
  function handleInput(e)
  {
    name=e.target.name
    value=e.target.value
 SetPassengerDetails({...passenerdetails,[name]:value})   
  }
  function next(e)
  {
 e.preventDefault();
 let payload={};
 payload['passenger']=passenerdetails;
 payload['flightId'] =flightId;
 SetPassengerDetails({});
  SetPassengerDetails(payload);
  // navigate("/bookingSucessful");
 axios.post(`http://localhost:8081/flightreservation/bookflight`,payload).then(res=>{ console.log(res.data.reservationId);
res.status===200?navigate(`/bookingSucessful?reservationId=${res.data.reservationId}`):console.log(res);


console.log(res.status);

 });
 
 
  }
  return (
    <div>
        <h1>Enter your Details</h1>
      <div class="athuntication">
        <form><br/>

        <label>Name</label>   <br/> <input class="inputborder"  type='text' name='passengerName' onChange={handleInput}></input><br/><br/>
        <label>Age</label><br/>   <input  class="inputborder"  type='number' name='age' onChange={handleInput}></input><br/><br/>
        <label>Other Details</label> <input class="inputborder"  type='text' name='additionalInformation'onChange={handleInput} ></input><br/><br/>

         
            <Button id="btn5" tye="Submit" onClick={next} >Next</Button>

        </form>

        </div>
    </div>
  )
}

export default Passenger