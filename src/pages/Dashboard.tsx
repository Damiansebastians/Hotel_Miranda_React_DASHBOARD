import React from "react";
import styled from "styled-components";
import { BiBed, BiRightArrowAlt } from "react-icons/bi";
import { TbCalendarMinus } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";
import CardContact from "../components/CardContact";
import {
    ChildDivContainer,
    ChildDivColor,
    DashboardParagraph,
    DashboardSpan,
    IconContainer,
    BoxContainer,
} from "../styles/DashboardStyled";

//----------------------------------------------------------
const ContactCardsContainer = styled.div`
    position: relative;
    width: 98%;
    transition: margin-left 0.5s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    padding: 0px 72px 70px 30px;
    `;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
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
        position: absolute;
        top: 55%;
        right: -25px;
        transform: translateY(-50%);
        width: 56px;
        height: 56px;
        background-color: #135846;
        border: none;
        justify-content: center;
        cursor: pointer;
        border-radius: 12px;

        &:hover{
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s, box-shadow 0.3s;
    }
    `;

//-------------------------------------------------
const Dashboard: React.FC = () => {
    return (
        <>
            <BoxContainer>
                <ChildDivContainer>
                    <ChildDivColor bgcolor={"#FFEDEC"}>
                        <IconContainer color={"#FFEDEC"}>
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
                        <IconContainer color={"#FFEDEC"}>
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
                        <IconContainer color={"#FFEDEC"}>
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
                        <IconContainer color={"#FFEDEC"}>
                            <SlLogout fontSize={"xx-large"} color={"#E23428"} />
                        </IconContainer>
                    </ChildDivColor>
                    <DashboardParagraph>
                        516
                        <DashboardSpan>Check out</DashboardSpan>
                    </DashboardParagraph>
                </ChildDivContainer>
            </BoxContainer>

            {/* //-------CARDS REVIEWS--------------- */}

            <ContactCardsContainer>
                <Title>Latest Review by Customers</Title>
                <CardsContainer>
                    <CardContact />
                    <CardContact />
                    <CardContact />
                </CardsContainer>
                <ButtonCard>
                    <BiRightArrowAlt
                        fontSize={"xx-large"}
                        color={"#ffffff"} />
                </ButtonCard>
            </ContactCardsContainer>
        </>
    );
};

export default Dashboard;