import React from "react";
import { Link } from "react-router-dom";
import { RiMoreLine } from "react-icons/ri"
import Data from "../../data/GuestList.json";

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableData,
    RowHeader,
    Paragraph,
    Span,
    ImgContainer,
    ParagraphContainer,
    HeaderContainer,
    ListTitleTopContainer,
    ListTitleTop,
    ButtonList,
    ButtonRequest,
    NewRoomButtonContainer,
    NewRoomButton,
    } from "./TableStyled.jsx"

    const TableList = () => {

    return (
        <>
            <TableContainer>
            <HeaderContainer>
                <ListTitleTopContainer>
                <ListTitleTop>All Guest</ListTitleTop>
                <ListTitleTop>Pending</ListTitleTop>
                <ListTitleTop>Booked</ListTitleTop>
                <ListTitleTop>Canceled</ListTitleTop>
                <ListTitleTop>Refund</ListTitleTop>
                </ListTitleTopContainer>
                <NewRoomButtonContainer>
                <NewRoomButton 
                    bgColor={"#135846"} 
                    color={"#ffffff"}>
                    1 November 2020 - 30 November 2020
                </NewRoomButton>
                <NewRoomButton 
                    color={"#135846"}
                    style={{
                            width: '129px'}}>
                    Newest
                </NewRoomButton>
                </NewRoomButtonContainer>
            </HeaderContainer>

            <Table>
                <thead>
                <RowHeader>
                    <TableHead>Guest</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Ckeck out</TableHead>
                    <TableHead>Special Request</TableHead>
                    <TableHead>Room Type</TableHead>
                    <TableHead>Status</TableHead>
                </RowHeader>
                </thead>
                <tbody>
                {Data.map((guest) => (
                    <TableRow key={guest.id}>
                    <ImgContainer>
                        <TableData
                        width={"100px"}
                        height={"90px"}
                        padding={"25px"}
                        >
                        <Link to={`/bookings/${guest.id}`}>
                            <img src={guest.img} alt="img" />
                        </Link>
                        </TableData>
                        <ParagraphContainer>
                        <Paragraph>{guest.Guest}</Paragraph>
                        <Span color={"#799283"}>{guest.number}</Span>
                        </ParagraphContainer>
                    </ImgContainer>
                    <TableData>
                        <Paragraph>{guest.Order_Date}</Paragraph>
                    </TableData>
                    <TableData>
                        <Paragraph>{guest.Check_in}</Paragraph>
                        <Span>9:46 PM</Span>
                    </TableData>
                    <TableData>
                        <Paragraph>{guest.Check_out}</Paragraph>
                        <Span>6:12 PM</Span>
                    </TableData>
                    <TableData>
                        <ButtonRequest
                        color={
                            guest.Status === "Booked"
                            ? "#799283" : "#212121"}
                        bgcolor={
                            guest.Status === "Booked"
                            ? "#ffffff" : "#EEF9F2"}
                        border={
                            guest.Status === "Booked" 
                            ? "1px solid #799283 " : "none"}
                        >
                        {guest.Special_Request}
                        </ButtonRequest>
                    </TableData>
                    <TableData>
                        <Paragraph>{guest.Room_type}</Paragraph>
                    </TableData>
                    <TableData>
                        <ButtonList
                        color={
                                guest.Status === "Refund"
                                ? "#E23428"
                                : guest.Status === "Booked"
                                ? "#5AD07A"
                                : guest.Status === "Pending"
                                ? "#6D6D6D"
                                : guest.Status === "Canceled"
                                ? "#BEBEBE"
                                : null
                            }
                            bgcolor={
                                guest.Status === "Refund"
                                ? "#FFEDEC"
                                : guest.Status === "Booked"
                                ? "#E8FFEE"
                                : guest.Status === "Pending"
                                ? "#E2E2E2"
                                : guest.Status === "Canceled"
                                ? "#575757"
                                : null
                            }
                        >
                        {guest.Status}
                        </ButtonList>
                    </TableData>
                    <TableData>
                    <RiMoreLine
                        style={{
                            width: '24px',
                            height: '24px',
                            transform: 'rotate(90deg)',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }} />
                    </TableData>
                    </TableRow>
                ))}
                </tbody>
            </Table>
            </TableContainer>
        </>
    );
};

export default TableList;
