import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginUser from "../pages/LoginUser";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Rooms from "../pages/Rooms";
import Contact from "../pages/Contact";
import Bookings from "../pages/Bookings";

import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return <>
        <Routes>
            <Route exact path="/" element={<LoginUser />} />
            <Route element={ <PrivateRoute /> } >

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user" element={<Users />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/rooms:/id" element={<Rooms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={ <Navigate to="/dashboard" />} />

            </Route>
        </Routes>
    </>;
};
