import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiKey } from "react-icons/bi";
import { TbCalendarMinus } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo_Hotel.png";
import Perfil from "../../assets/images/perfil.jpg";
import {
    LateralMenu,
    ListItems,
    ElementsDiv,
    UserName,
    UserEmail,
    LastTitle,
    AllRigths,
    LinkContainer,
    Logo,
    CardAvatar,
    AvatarImage,
    Foot,
    ButtonEdit,
    TitleLogo,
    TextLogo,
    } from "./SideBarStyled.jsx";

    const SideBar = () => {

    return (
        <LateralMenu>
                <Logo>
                    <img src={logo} alt="Logo Hotel" />
                    <div>
                        <TitleLogo>travl</TitleLogo>
                        <TextLogo>Hotel Admin Dashboard</TextLogo>
                    </div>
                </Logo>
            <ul>
                <LinkContainer>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => isActive && "active"}
                    style={{ textDecoration: "none" }} >
                    <ElementsDiv>
                    <RiDashboardLine size={25} />
                    <ListItems>Dashboard</ListItems>
                    </ElementsDiv>
                </NavLink>

                <NavLink
                    to="/bookings"
                    className={({ isActive }) => isActive && "active"}
                    style={{ textDecoration: "none" }} >
                    <ElementsDiv>
                    <TbCalendarMinus size={25} />
                    <ListItems>Bookings</ListItems>
                    </ElementsDiv>
                </NavLink>

                <NavLink
                    to="/rooms"
                    className={({ isActive }) => isActive && "active"}
                    style={{ textDecoration: "none" }}>
                    <ElementsDiv>
                    <BiKey size={25} />
                    <ListItems>Rooms</ListItems>
                    </ElementsDiv>
                </NavLink>

                <NavLink
                    to="/users"
                    className={({ isActive }) => isActive && "active"}
                    style={{ textDecoration: "none" }}>
                    <ElementsDiv>
                    <FaUserAlt size={25} />
                    <ListItems>Users</ListItems>
                    </ElementsDiv>
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive && "active"}
                    style={{ textDecoration: "none" }}>
                    <ElementsDiv>
                    <AiFillContacts size={25} />
                    <ListItems>Contact</ListItems>
                    </ElementsDiv>
                </NavLink>

                </LinkContainer>
            </ul>

            <CardAvatar>
                <AvatarImage>
                <img src={Perfil} alt="Avatar" />
                </AvatarImage>
                <UserName>ADMIN</UserName>
                <UserEmail>admin@admin.com</UserEmail>
                <ButtonEdit>Contact Us</ButtonEdit>
            </CardAvatar>

            <Foot>
                <LastTitle>Hotel Miranda Admin Dashboard</LastTitle>
                <AllRigths>2023 All Rights Reserved</AllRigths>
                <AllRigths>Made with ♥ by Damian Silvera</AllRigths>
            </Foot>
        </LateralMenu>
    );
};

export default SideBar;