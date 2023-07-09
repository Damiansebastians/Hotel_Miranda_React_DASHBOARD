import React from "react";
import { ContactList } from "../data/ContactList";
import CardContact from "../components/CardContact";
import {
  ContactCardsContainer,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableData,
  RowHeader,
  Paragraph,
  ImgContainer,
  HeaderContainer,
  ListTitleTopContainer,
  ListTitleTop,
  NewRoomButtonContainer,
  NewRoomButton,
} from "../styles/BookingsStyled";
import Button from "../components/Button";


const Contact = () => {
  return (
    <>
      <TableContainer>
        <ContactCardsContainer>
          <CardContact />
          <CardContact />
          <CardContact />
        </ContactCardsContainer>
        <HeaderContainer>
          <ListTitleTopContainer>
            <ListTitleTop>All Costumer Reviews</ListTitleTop>
            <ListTitleTop>Publised</ListTitleTop>
            <ListTitleTop>Archive</ListTitleTop>
          </ListTitleTopContainer>
          <NewRoomButtonContainer right={"40px"}>
            <NewRoomButton color={"#135846"}>Newest</NewRoomButton>
          </NewRoomButtonContainer>
        </HeaderContainer>
        <Table>
          <thead>
            <RowHeader>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Action</TableHead>
            </RowHeader>
          </thead>
          <tbody>
            {ContactList.map((guest) => (
              <TableRow key={guest.id}>
                <ImgContainer>
                  <TableData
                    width={"0px"}
                    height={"180px"}
                    padding={"25px"}
                  ></TableData>
                  <Paragraph>{guest.id}</Paragraph>
                </ImgContainer>
                <TableData>
                  <Paragraph>{guest.date}</Paragraph>
                </TableData>
                <TableData>
                  <Paragraph>{guest.customer}</Paragraph>
                </TableData>
                <TableData>
                  <Paragraph>{guest.comment}</Paragraph>
                </TableData>
                <TableData>
                  <Button color={"red"} bgcolor={"#E8FFEE"}>
                    {guest.action}
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

export default Contact;
