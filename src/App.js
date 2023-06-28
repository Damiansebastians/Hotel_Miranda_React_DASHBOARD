import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bookings from './pages/Bookings';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import LoginUser from './pages/LoginUser';
import "./App.css";
import { AppRouter } from './router/AppRouter';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
