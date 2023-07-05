import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/Logo_Hotel.png";
import { useSelector, useDispatch } from "react-redux";
import { TiDelete } from "react-icons/ti";
import {
    Table,
    TableHead,
    TableRow,
    TableData,
    RowHeader,
    Paragraph,
    Span,
    ImgContainer,
    ParagraphContainer,
    ButtonList,
    HeaderContainer,
    ListTitleTopContainer,
    ListTitleTop,
    NewRoomButtonContainer,
    NewRoomButton,
    } from "../styles/RoomsStyled";
import { deleteRoom, fetchAllRooms } from "../store/slices/roomsSlice";

    const Rooms = () => {
    const dispatch = useDispatch();
    const { list, status } = useSelector((state) => state.roomSlice);

    useEffect(() => {
        dispatch(fetchAllRooms());
    }, [dispatch]);

    const handleClickDelete = (id) => {
        dispatch(deleteRoom(id));
    };

    return (
        <>
            <HeaderContainer>
                <ListTitleTopContainer>
                <ListTitleTop>All Rooms</ListTitleTop>
                <ListTitleTop>Active Employee</ListTitleTop>
                <ListTitleTop>Inactive Employee</ListTitleTop>
                </ListTitleTopContainer>
                <NewRoomButtonContainer>
                <NewRoomButton 
                    bgColor={"#135846"} 
                    color={"#ffffff"}>
                    + New Room
                </NewRoomButton>
                <NewRoomButton 
                    color={"#135846"}
                    style={{
                            width: '129px',
                            border: "1px solid #135846"}}>
                    Newest
                </NewRoomButton>
                </NewRoomButtonContainer>
            </HeaderContainer>
            <Table>
                <thead>
                <RowHeader>
                    <TableHead>Room Name</TableHead>
                    <TableHead>Bed Type</TableHead>
                    <TableHead>Room Floor</TableHead>
                    <TableHead>Facilities</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Status</TableHead>
                </RowHeader>
                </thead>
                <tbody>
                {list.map((room) => (
                    <TableRow key={room.id}>
                    <ImgContainer>
                        <TableData>
                            <img src={room.img} alt="img" />
                        </TableData>
                        <ParagraphContainer>
                        <Span>#000123456</Span>
                        <Paragraph>Deluxe A-91234</Paragraph>
                        </ParagraphContainer>
                    </ImgContainer>
                    <TableData>
                        <Paragraph>{room.bed_Type}</Paragraph>
                    </TableData>
                    <TableData>
                        <Paragraph>{room.room_floor}</Paragraph>
                    </TableData>
                    <TableData>
                        <Paragraph>{room.facilities}</Paragraph>
                    </TableData>
                    <TableData>
                        <Paragraph>
                        {room.rate}
                        <Span>night</Span>
                        </Paragraph>
                    </TableData>
                    <TableData>
                        <ButtonList
                        bgcolor={
                                room.status === "Available"
                                ? "#5AD07A"
                                : room.status === "Booked"
                                ? "#E23428"
                                : null
                            }
                        >{room.status}</ButtonList>
                    </TableData>
                    <TableData>
                        <TiDelete
                        color={"red"}
                        size={25}
                        onClick={() => handleClickDelete(room.id)}
                        />
                    </TableData>
                    </TableRow>
                ))}
                </tbody>
            </Table>
        )
        </>
    );
};

export default Rooms;
