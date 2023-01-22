import axios from 'axios';
import React, { useSyncExternalStore } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';
import Ticket from './Ticket';
import { Button } from 'react-bootstrap';
function BookingSucessful() {
  const[serachParams]=useSearchParams();
  var reservationId=serachParams.get("reservationId");
   const[flightdata,setFlightData]=useState({});
   const[passengerdata,setPassengerData]=useState({});
  function showingdata(){
   
    axios.get(`http://localhost:8081/flightreservation/getFlightByReservationId?reservationId=${reservationId}`).then(res=>{
      setFlightData(res.data);
  });
    axios.get(`http://localhost:8081/flightreservation/getPassengerByReservationId?reservationId=${reservationId}`).then(res=>{ setPassengerData(res.data); 
  });
   }
   
  return (
    <>
    <div>
      
      <h1>BookingSucessful</h1><br/>
      
<Button id="btn5" onClick={showingdata}>View ticket</Button> 

</div>
{
 
 JSON.stringify(flightdata) !== '{}' && JSON.stringify(passengerdata) !== '{}'?<Ticket flightdata={flightdata} passengerdata={passengerdata}/>:null
 }

</>
  )
}

export default BookingSucessful