import React, { useState } from "react";
import { BiBed } from "react-icons/bi";
import { TbCalendarMinus } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";
import CardContact from "../components/CardContact";
import {
    MainDIvContainer,
    ChildDivContainer,
    ChildDivColor,
    DashboardParagraph,
    DashboardSpan,
    IconContainer,
    } from "../styles/DashboardStyles";
    import styled from "styled-components";

    const ContactCardsContainer = styled.div`
    margin-left: ${(props) => props.margin};
    transition: margin-left 0.5s;
    margin-top: 40px;
    ${"" /* width: 80%; */}
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 70px;
    `;
    const CardsContainer = styled.div`
    display: flex;
    `;
    const Title = styled.h2`
    width: 100%;
    padding-bottom: 30px;
    text-align: left;
    font: normal normal medium 20px/30px Poppins;
    letter-spacing: 0px;
    color: #393939;
    `;

    const Dashboard = ({ measure }) => {
    return (
        <>
        <MainDIvContainer margin={measure ? "350px" : "50px"}>
            <ChildDivContainer>
            <ChildDivColor bgcolor={"#FFEDEC"}>
                <IconContainer>
                <BiBed fontSize={"xx-large"} color={"#E23428"} />
                </IconContainer>
            </ChildDivColor>
            <DashboardParagraph>
                8,461
                <DashboardSpan>New Booking</DashboardSpan>
            </DashboardParagraph>
            </ChildDivContainer>
            <ChildDivContainer>
            <ChildDivColor bgcolor={"#E23428"}>
                <IconContainer>
                <TbCalendarMinus fontSize={"xx-large"} color={"#FFFFFF"} />
                </IconContainer>
            </ChildDivColor>
            <DashboardParagraph>
                963
                <DashboardSpan>Scheduled Room</DashboardSpan>
            </DashboardParagraph>
            </ChildDivContainer>
            <ChildDivContainer>
            <ChildDivColor bgcolor={"#FFEDEC"}>
                <IconContainer>
                <RiLoginBoxLine fontSize={"xx-large"} color={"#E23428"} />
                </IconContainer>
            </ChildDivColor>
            <DashboardParagraph>
                753
                <DashboardSpan>Check in</DashboardSpan>
            </DashboardParagraph>
            </ChildDivContainer>
            <ChildDivContainer>
            <ChildDivColor bgcolor={"#FFEDEC"}>
                <IconContainer>
                <SlLogout fontSize={"xx-large"} color={"#E23428"} />
                </IconContainer>
            </ChildDivColor>
            <DashboardParagraph>
                516
                <DashboardSpan>Check out</DashboardSpan>
            </DashboardParagraph>
            </ChildDivContainer>
        </MainDIvContainer>
        <ContactCardsContainer margin={measure ? "350px" : "50px"}>
            <Title>Latest Review by Customers</Title>
            <CardsContainer>
            <CardContact />
            <CardContact />
            <CardContact />
            </CardsContainer>
        </ContactCardsContainer>
        </>
    );
};

export default Dashboard;