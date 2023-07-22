import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

    export const PrivateRoute: React.FC = () => {
    const { isLogged } = useContext(AuthContext);

    if (!isLogged) {
        return <Navigate to="/" />;
    }

    return <Outlet />
};

