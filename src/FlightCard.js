import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function FlightCard(props) {
    const data=props.items
  return (
   <>{ data.length>0 &&(
    
     <div id="flightCard">
            <table>
                <tr>
                  <th>Flight No  </th>
                 <th> Airline </th>
                    <th>Source </th>
                    <th>Destination      </th>
                    <th>Depature Date      </th>
                </tr>
              
                        {data.map((val) => {
                           return (
                                <tr id="row" >
                                    <td>{val.flightId}</td>
                                    <td>{val.operatingAirline}</td>
                                    <td>{val.source}</td>
                                    <td>{val.destination}</td>
                                    <td>{val.arrivalDate}</td>
                                    
                                  
                               <Link to={`/Passenger?flightId=${val.flightId}`}>  <Button id="btn4">book</Button></Link>
                                </tr>
                            )
                        })}

            </table>
        
        </div>)

        }</>
    
  );
    }

export default FlightCard