import React from "react";
import { Navigate } from "react-router-dom";

const Rooms = ({ id }) => {
    return (
        <>
        <Navigate to={`/room/${id}`}>
            <div>Rooms</div>
        </Navigate>
        </>
    );
};

export default Rooms;
