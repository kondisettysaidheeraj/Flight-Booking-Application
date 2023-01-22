import logo from './logo.svg';
import './App.css';
import Athuntication from './Athuntication';
import Booking from './Booking';
import Passenger from './Passenger';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Singup from './Singup';
import BookingSucessful from './BookingSucessful';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
     <div class="App">
      <Routes>
     
     
<Route path="/"  element={<Athuntication/>}/>   
<Route path="/Booking" element={<Booking/>}/> 
<Route path="/Passenger" element={<Passenger/>}/> 
<Route path="/login" element={<Login/>}/>
<Route path="/singup" element={<Singup/>} />
<Route path="/bookingSucessful" element={<BookingSucessful/>}/>


     </Routes>
     </div>
    </BrowserRouter>
    
   
  );
  
}

export default App;
