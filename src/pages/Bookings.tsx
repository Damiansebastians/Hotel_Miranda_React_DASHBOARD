import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Link } from "react-router-dom";
import { RiMoreLine } from "react-icons/ri"
import { Booking } from "../Interfaces/BookingInterface";
import { fetchAllBookings } from "../store/slices/bookingSlice";

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
    ButtonList,
    ButtonRequest,
    NewRoomButtonContainer,
    NewRoomButton,
} from "../styles/BookingsStyled";
import { ListTitleTop } from "../styles/RoomsStyled";

const Bookings: React.FC = () => {
    const dispatch = useAppDispatch();
    const { list } = useAppSelector((state) => state.bookingsSlice);
    const guest: Booking[] = list;
    const [filter, setFilter] = useState<string>("all");

    //FILTROS
    useEffect(() => {
        dispatch(fetchAllBookings());
    }, [dispatch]);

    const filterBookings = () => {
        switch (filter) {
            case "Pending":
                return guest.filter((booking) => booking.Status === "Pending");
            case "Booked":
                return guest.filter((booking) => booking.Status === "Booked");
            case "Canceled":
                return guest.filter((booking) => booking.Status === "Canceled");
            case "Refund":
                return guest.filter((booking) => booking.Status === "Refund");
            default:
                return guest;
        }
    };

    const filteredBookings = filterBookings();

    return (
        <>
            <TableContainer>
                <HeaderContainer>
                    <ListTitleTopContainer>
                        <ListTitleTop
                            onClick={() => setFilter("all")}
                            selected={filter === "all"}
                        >
                            All Guest
                        </ListTitleTop>
                        <ListTitleTop
                            onClick={() => setFilter("Pending")}
                            selected={filter === "Pending"}
                        >
                            Pending
                        </ListTitleTop>
                        <ListTitleTop
                            onClick={() => setFilter("Booked")}
                            selected={filter === "Booked"}
                        >
                            Booked
                        </ListTitleTop>
                        <ListTitleTop
                            onClick={() => setFilter("Canceled")}
                            selected={filter === "Canceled"}
                        >
                            Canceled
                        </ListTitleTop>
                        <ListTitleTop
                            onClick={() => setFilter("Refund")}
                            selected={filter === "Refund"}
                        >
                            Refund
                        </ListTitleTop>
                    </ListTitleTopContainer>
                    <NewRoomButtonContainer>
                        <NewRoomButton
                            bgcolor={"#135846"}>
                            1 November 2020 - 30 November 2020
                        </NewRoomButton>
                        <NewRoomButton
                            bgcolor={"#ffffff"}
                            color={"#135846"}
                            style={{
                                width: '129px'
                            }}>
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
                        {filteredBookings.map((guest) => (
                            <TableRow key={guest.id}>
                                <ImgContainer>
                                    <TableData
                                        width={"100px"}
                                        height={"90px"}
                                    >
                                        <Link to={`/s/${guest.id}`}>
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
                                                ? "1px solid #799283" : "none"}
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
                                                            : "#ffffff"
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
                                                            : "#ffffff"
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

export default Bookings;