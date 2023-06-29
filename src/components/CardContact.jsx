import React from "react";
import styled from "styled-components";
import Avatar from "../assets/images/Logo_Hotel.png";
import { FcOk } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";

const MainCard = styled.div`
  width: 80%;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  margin-right: 40px;
`;
const ParagraphContact = styled.div`
  width: 80%;
  margin-top: 30px;
  margin-left: 30px;
  text-align: left;
  font: normal normal normal 16px Poppins;
  color: #4e4e4e;
`;
const ContactContainer = styled.div`
  display: flex;
  margin-top: 52px;
  margin-left: 30px;
  margin-bottom: 30px;
`;
const ImageContainer = styled.div`
  img {
    width: 88px;
    height: 88px;
    border-radius: 12px;
  }
`;
const DataUserContainer = styled.div`
  margin-left: 21px;
`;
const DataUserContent = styled.p`
  padding-right: 50px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #262626;
  font: normal normal 600 16px/25px Poppins;
`;

const Span = styled.p`
  margin-top: 15px;
  text-align: left;
  color: #799283;
  font: normal normal normal 14px/21px Poppins;
`;
const IconsContainer = styled.div`
  display: flex;
  padding-top: 10px;
  ${"" /* margin-left:75px; */}
  align-items: center;
  column-gap: 16px;
`;
const CardContact = () => {
  return (
    <div>
      <MainCard>
        <ParagraphContact>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </ParagraphContact>
        <ContactContainer>
          <ImageContainer>
            <img src={Avatar} alt="contact" />
          </ImageContainer>
          <DataUserContainer>
            <DataUserContent>Cristina Aguilera</DataUserContent>
            <Span>4m ago</Span>
            <IconsContainer>
              <FcOk size={20}></FcOk>
              <GiCancel size={20} color={"red"}></GiCancel>
            </IconsContainer>
          </DataUserContainer>
        </ContactContainer>
      </MainCard>
    </div>
  );
};

export default CardContact;
