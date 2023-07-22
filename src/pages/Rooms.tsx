import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { TiDelete } from "react-icons/ti";
import { deleteRoom, fetchAllRooms } from "../store/slices/roomsSlice";
import { Room } from "../Interfaces/RoomInterface";
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


const Rooms: React.FC = () => {
    const dispatch = useAppDispatch();
    const { list } = useAppSelector((state) => state.roomSlice);
    const rooms: Room[] = list;
    const [filter, setFilter] = useState<string>("all");

    useEffect(() => {
        dispatch(fetchAllRooms());
    }, [dispatch]);

    const handleClickDelete = (id: number) => {
        dispatch(deleteRoom(id));
    };

    //FILTROS
    const filterRooms = () => {
        switch (filter) {
            case "active":
                return rooms.filter((room) => room.status === "Available");
            case "inactive":
                return rooms.filter((room) => room.status === "Booked");
            default:
                return rooms;
        }
    };

    const filteredRooms = filterRooms();

    return (
        <>
            <HeaderContainer>
                <ListTitleTopContainer>
                    <ListTitleTop
                        onClick={() => setFilter("all")}
                        selected={filter === "all"} >
                        All Rooms
                    </ListTitleTop>
                    <ListTitleTop
                        onClick={() => setFilter("active")}
                        selected={filter === "active"} >
                        Active Rooms
                    </ListTitleTop>
                    <ListTitleTop
                        onClick={() => setFilter("inactive")}
                        selected={filter === "inactive"} >
                        Inactive Rooms
                    </ListTitleTop>
                </ListTitleTopContainer>
                <NewRoomButtonContainer>
                    <NewRoomButton
                        bgcolor={"#135846"}
                        color={"#ffffff"}>
                        <Link to='/rooms/newRoom'>
                            + New Room
                        </Link>
                    </NewRoomButton>
                    <NewRoomButton
                        color={"#135846"}
                        bgcolor=""
                        style={{
                            width: '129px',
                            border: "1px solid #135846"
                        }}>
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
                        <TableHead>Price</TableHead>
                        <TableHead>Offer Price</TableHead>
                        <TableHead>Status</TableHead>
                    </RowHeader>
                </thead>
                <tbody>
                    {filteredRooms.map((room) => (
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
                                    {room.price}
                                    <Span>/night</Span>
                                </Paragraph>
                            </TableData>
                            <TableData>
                                <Paragraph>
                                    {room.offer}
                                    <Span>/night</Span>
                                </Paragraph>
                            </TableData>
                            <TableData>
                                <ButtonList
                                    bgcolor={
                                        room.status === "Available"
                                            ? "#5AD07A"
                                            : room.status === "Booked"
                                                ? "#E23428"
                                                : "#FFFFFF"
                                    }
                                >{room.status}</ButtonList>
                            </TableData>
                            <TableData>
                                <TiDelete
                                    color={"red"}
                                    size={25}
                                    onClick={() => typeof room.id === 'number' && handleClickDelete(room.id)}
                                />
                            </TableData>
                        </TableRow>
                    ))};
                </tbody>
            </Table>
        </>
    );
};

export default Rooms;
