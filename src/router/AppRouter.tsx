import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginUser from "../pages/LoginUser";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Rooms from "../pages/Rooms";
import Contact from "../pages/Contact";
import Bookings from "../pages/Bookings";
import { PrivateRoute } from "./PrivateRoute";
import BookingsView from "../pages/BookingsView";
import NewRoom from "../pages/NewRoom";
import Layout from "../components/Layout";


export const AppRouter: React.FC= () => {
  const [authenticated, setAuthenticated] = useState(false);


  const handleSetAuth = (value: boolean) => {
    setAuthenticated(value);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Layout setAuth={handleSetAuth} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/bookings/:id" element={<BookingsView  />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path='/rooms/newRoom' element={<NewRoom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
