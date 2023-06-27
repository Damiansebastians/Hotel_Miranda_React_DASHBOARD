import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bookings from './pages/Bookings';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import Contact from './pages/Contact';
//import LoginUser from './pages/LoginUser'
import "./App.css";
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path ="/" element={<Dashboard/>}/>
            <Route path="/user" element={<Users/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/rooms:/id" element={<Rooms/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> 
        </div>
      </BrowserRouter> 
    </>
  );
}

export default App;
