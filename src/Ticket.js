import React from 'react'


function Ticket(props) {
    const flightdata=props.flightdata;
    const passengerdata=props.passengerdata;
  return (
    <div>
      <br/>
     <td> </td>
       <div id="ticket">
       
        <table id="ticketTable">
       <tr > <td><label>Passenger Name</label></td>     <td> {passengerdata.passengerName} </td></tr>
       <tr> <td> <label>Passenger Age</label></td>    <td>  {passengerdata.age} </td></tr>
       <tr>   <td> <label>Flight Number</label> </td>  <td>{flightdata.flightId} </td></tr>
       <tr>  <td> <label>From City</label> </td> <td> {flightdata.source}  </td></tr>
       <tr>  <td> <label>To City</label> </td>  <td> {flightdata.destination} </td></tr>
       <tr> <td>  <label>Arrival Date</label> </td>   <td>{flightdata.arrivalDate} </td></tr>
       <tr> <td>  <label>Operating Airline</label> </td>  <td>{flightdata.operatingAirline} </td></tr>
          </table>
         </div>


    </div>
  )
}

export default Ticket
