import React from "react";
import styled from "styled-components";
import { BiMenuAltLeft } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

//ESTILOS--------------------------------------
    const NavContainer = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: margin-left 0.5s;
        padding: 16px;
        background-color: #ffffff;
        box-shadow: 0px 2px 10px #000000;
        `;

    const TitleNav = styled.p`
        color: #ff0000;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 28px ;
        letter-spacing: 0px;
        color: #262626;
    `;

//FUNCIÓN-------------------------------------------

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const nameRoute = location.pathname;
    
//NOMBRE DE CADA RUTA------------------------------

    let Title;
    const isLogged = " ";

        if (!isLogged) {
            return null;
        }
        if (nameRoute === "/dashboard") {
            Title = "Dashboard";
        } else if (nameRoute === "/rooms") {
            Title = "Rooms";
        } else if (nameRoute === "/users") {
            Title = "Users";
        } else if (nameRoute === "/bookings") {
            Title = "Bookings";
        } else if (nameRoute === "/contact") {
            Title = "Contact";
        }

//CERRAR SESION Y BORRAR LOCALSTORAGE
        const logOut = () => {
                localStorage.removeItem('logged');
                localStorage.removeItem('email'); 
                localStorage.removeItem('password');
                navigate("/");
        };

        return (
            <>
                <NavContainer>
                    <BiMenuAltLeft size={30} style={{ cursor: "pointer" }} />
                    <TitleNav>{Title}</TitleNav>
                    <CiMail size={30} style={{ cursor: "pointer" }}></CiMail>
                    <BsBell size={30} style={{ cursor: "pointer" }}></BsBell>
                    <FiLogOut onClick={logOut} size={30} style={{ cursor: "pointer" }}></FiLogOut>
                </NavContainer>
            </>
        );
    };

export default NavBar;