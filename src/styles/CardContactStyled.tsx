import styled from "styled-components";

const MainCard = styled.div`
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 20px;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    }
    `;
const ParagraphContact = styled.div`
    width: 80%;
    padding: 30px;
    text-align: left;
    font: normal normal normal 16px/28px 'Poppins';
    color: #4e4e4e;

    `;
const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 30px;
    `;
const ImageContainer = styled.div`
        img {
            width: 56px;
            height: 56px;
            border-radius: 12px;
        }
    `;
const DataUserContainer = styled.div`
    margin-left: 21px;
    `;
const DataUserContent = styled.p`
    padding-right: 50px;
    margin-top: 4px;
    margin-bottom: -14px;
    color: #262626;
    font: normal normal 600 16px/25px 'Poppins';
    `;

const DataDescription = styled.p`
    margin-top: 15px;
    text-align: left;
    color: #799283;
    font: normal normal normal 14px/21px 'Poppins';
    `;
const IconsContainer = styled.div`
    display: flex;
    padding-top: 10px;
    align-items: center;
    column-gap: 16px;
 `;

 export {
  MainCard,
  ParagraphContact,
  ContactContainer,
  ImageContainer,
  DataUserContainer,
  DataUserContent,
  DataDescription,
  IconsContainer
 }