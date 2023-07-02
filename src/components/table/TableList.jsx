import React from "react";
import { Link } from "react-router-dom";
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
    NewRoomButtonContainer,
    NewRoomButton,
    } from "./TableStyled.jsx"

import Button from "../Button";

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
                <NewRoomButton bgColor={"#135846"} color={"white"}>
                    1 November - 30 November 2020
                </NewRoomButton>
                <NewRoomButton color={"#135846"}>Newest</NewRoomButton>
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
                        height={"100px"}
                        padding={"25px"}
                        >
                        <Link to={`/bookings/${guest.id}`}>
                            <img src={guest.img} alt="img" />
                        </Link>
                        </TableData>
                        <ParagraphContainer>
                        <Paragraph>{guest.Guest}</Paragraph>
                        <Span color={"#799283"}>#000123456</Span>
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
                        <Button
                        color={guest.Status === "Refund" ? "#212121" : "#799283"}
                        bgcolor={guest.Status === "Refund" ? "#EEF9F2" : "white"}
                        border={guest.Status === "Booked" ? "1px solid " : "none"}
                        >
                        {guest.Special_Request}
                        </Button>
                    </TableData>
                    <TableData>
                        <Paragraph>{guest.Room_type}</Paragraph>
                    </TableData>
                    <TableData>
                        <Button
                        color={guest.Status === "Refund" ? "red" : "#5AD07A"}
                        bgcolor={
                            guest.Status === "Refund" ? "#FFEDEC" : "#E8FFEE"
                        }
                        >
                        {guest.Status}
                        </Button>
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
