import React from "react";
import styled from "styled-components";
import MainNavContainer from "../components/MainNavContainer";
import { BiBed } from "react-icons/bi";
import { TbCalendarMinus } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";
import CardContact from "../components/CardContact";
import Reservation from "../assets/images/Reservation.png";
import {
    MainDIvContainer,
    ChildDivContainer,
    ChildDivColor,
    DashboardParagraph,
    DashboardSpan,
    IconContainer,
    } from "../styles/DashboardStyles";

//----------------------------------------------------------
    const ContactCardsContainer = styled.div`
    width: 80%;
    transition: margin-left 0.5s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    padding: 0px 50px;
    `;
    const CardsContainer = styled.div`
    display: flex;
    `;
    const Title = styled.h2`
    width: 100%;
    padding-bottom: 30px;
    text-align: left;
    font: normal normal medium 20px/30px 'Poppins';
    letter-spacing: 0px;
    color: #393939;
    `;
    const ButtonCard = styled.button`
    width: 56px;
    height: 56px;
    background-color: green;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    `;
    
    const ArrowIcon = styled.div`
        width: 12px;
        height: 12px;
        border-top: 2px solid white;
        border-right: 2px solid white;
        transform: rotate(45deg);
    `;

//-------------------------------------------------
    const Dashboard = ()=> {
    return (
        <>
        
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

            {/* //provisorio */}
            <div style={{ backgroundColor: '#f8f8f8', marginLeft: '80px', paddingBottom:'50px ' }}>
                <img src={Reservation} alt="" />
            </div>

{/* //-------CARDS REVIEWS--------------- */}

        <ContactCardsContainer>
            <Title>Latest Review by Customers</Title>
            <CardsContainer>
            <CardContact />
            <CardContact />
            <CardContact />
            </CardsContainer>
                <ButtonCard>
                    <ArrowIcon />
                </ButtonCard>
        </ContactCardsContainer>
        </>
    );
};

export default Dashboard;