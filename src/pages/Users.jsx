import React, { useEffect, useState } from "react";
import { HiPhone } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/slices/userSlice";
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
} from "../styles/UsersStyled";

const Users = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.usersSlice);
  const filUsers = list;
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  //FILTROS
  const filterUsers = () => {
    switch (filter) {
      case "active":
        return filUsers.filter((users) => users.Status === "ACTIVE");
      case "inactive":
        return filUsers.filter((users) => users.Status === "INACTIVE");
      default:
        return filUsers;
    }
  };

  const filteredUsers = filterUsers();

  return (
    <>
      <TableContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop
              onClick={() => setFilter("all")}
              selected={filter === "all"}
            >
              All Employee
            </ListTitleTop>

            <ListTitleTop
              onClick={() => setFilter("active")}
              selected={filter === "active"}
            >
              Active Employee
            </ListTitleTop>

            <ListTitleTop
              onClick={() => setFilter("inactive")}
              selected={filter === "inactive"}
            >
              Inactive Employee
            </ListTitleTop>

            <ListTitleTop>Search</ListTitleTop>
          </ListTitleTopContainer>
          <NewRoomButtonContainer>
            <NewRoomButton bgColor={"#135846"} color={"white"}>
              + New Employee
            </NewRoomButton>
            <NewRoomButton color={"#135846"}>Newest</NewRoomButton>
          </NewRoomButtonContainer>
        </HeaderContainer>
        <Table>
          <thead>
            <RowHeader>
              <TableHead>Name</TableHead>
              <TableHead>Job Desk</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
            </RowHeader>
          </thead>
          <tbody>
            {filteredUsers.map((users) => (
              <TableRow key={users.id}>
                <ImgContainer>
                  <TableData width={"100px"} height={"90px"} padding={"25px"}>
                    <img src={users.img} alt="img" />
                  </TableData>
                  <ParagraphContainer>
                    <Paragraph weight={"700"}>{users.name}</Paragraph>
                    <Span>{users.number}</Span>
                    <Span>Joined on Aug 2th 2017</Span>
                  </ParagraphContainer>
                </ImgContainer>
                <TableData>
                  <Paragraph>{users.Job_Desk}</Paragraph>
                </TableData>
                <TableData>
                  <Paragraph>{users.Schedule}</Paragraph>
                  <Span color={"#135846"}>Check Schedule</Span>
                </TableData>
                <TableData>
                  <Paragraph>
                    <HiPhone style={{ paddingRight: "15px" }} />
                    {users.Contact}
                  </Paragraph>
                </TableData>
                <TableData>
                  <Paragraph
                    color={users.Status === "INACTIVE" ? "#E23428" : "#5AD07A"}
                  >
                    {users.Status}
                  </Paragraph>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
