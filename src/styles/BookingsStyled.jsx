import styled from "styled-components";

//------------------------BOOKINGS-----------------------------------

const TableContainer = styled.div`
  margin: 0 auto;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`;
const Table = styled.table`
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 20px;
  text-align: left;
`;

const TableHead = styled.td`
  padding: 15px;
  color: #393939;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins";
`;

const TableRow = styled.tr`
  border-top: 1px solid rgb(212, 212, 212);
`;

const TableData = styled.td`
  padding: 15px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;
//---------------------------------------------
const RowHeader = styled.tr`
  border-bottom: 1px solid #ccc;
`;
const Paragraph = styled.p`
  max-width: 300px;
  font-size: 16px;
  line-height: 25px;
  font-family: "Poppins";
  font-weight: bold;
  color: ${(props) => props.color || "#393939"};
`;
//---------------------------------------------
const Span = styled.span`
  color: ${(props) => props.color};
  padding-bottom: 10px;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: initial;
  margin-right: 80px;
`;
//---------------------------------------------
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//---------------------------------------------
const ListTitleTopContainer = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 50px;
`;
//---------------------------------------------
const ListTitleTop = styled.p`
  color: rgb(110, 110, 110);
  font-weight: 500;
  padding: 12px 30px;
  border-bottom: 1px solid rgb(212, 212, 212);
  :hover {
    color: #135846;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 2px solid #135846;
  }
`;
//---------------------------------------------
const ButtonList = styled.button`
  font-size: 19px;
  font-family: "Poppins";
  text-align: center;
  letter-spacing: 0px;
  width: 110px;
  height: 50px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  padding: 13px;
  border: none;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
`;
//---------------------------------------------
const ButtonRequest = styled.button`
  font-size: 19px;
  font-family: "Poppins";
  text-align: center;
  letter-spacing: 0px;
  width: 160px;
  height: 50px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  padding: 13px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
`;
//---------------------------------------------
const NewRoomButtonContainer = styled.div`
  display: flex;
`;
//---------------------------------------------
const NewRoomButton = styled.button`
  width: 427px;
  height: 49px;
  border-radius: 12px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-family: "Poppins";
  padding: 13px 23px;
  border: none;
`;

//------------------------BOOKINGS VIEW------------------------------

const BookingsDetailsContainer = styled.div`
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0px 3px 10px #00000005;
  margin-top: 127px;
  transition: margin-left 0.5s;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
`;

const DataContainer = styled.div`
  width: 90%;
  padding: 25px;
`;

const MainDataContainer = styled.div``;
const MainDivTitle = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 40px;
  gap: 20px;
`;

const ImageContainer = styled.div`
  width: 156px;
  height: 156px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

const MainDataBookings = styled.div``;
const TitleBookings = styled.p`
  text-align: left;
  font: normal normal 600 30px/46px 'Poppins';
  margin: 0 auto;
`;

const IdBookings = styled.p`
  text-align: left;
  font: normal normal normal 14px/21px 'Poppins';
  color: #799283;
`;

const ContactBookings = styled.div`
  display: flex;
`;

const IconPhoneContainer = styled.div`
  width: 59px;
  height: 59px;
  border: 1px solid #e8f2ef;
  border-radius: 12px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;

      &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        }
  svg{
    color: #135846;
  }
`;

const SendMessageButton = styled.button`
  width: 200px;
  height: 59px;
  border-radius: 12px;
  background-color: #135846;
  color: #ffffff;
  border: none;
  margin-right: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;

        &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        }
`;

const IconChatContainer = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

const CheckinOutDataContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 5%;
`;

const CheckinDataContainer = styled.div`
  text-align: left;
  margin-right: ${(props) => props.margin};
`;

const CheckinDataSpan = styled.p`
  font-size: 18px;
  font-family: 'Poppins';
  color: #6e6e6e;
`;

const CheckinDataDate = styled.p`
  font-size: 20px;
  font-family: "Poppins";
  font-weight: bold;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #e8d8d8;
  margin-top: 15px;
  margin-left: 5%;
`;

const MainParagraph = styled.p`
  width: 90%;
  margin-left: 5%;
  text-align: left;
  font-size: 16px;
  font-family: 'Poppins';
  letter-spacing: 0px;
  color: #363636;
`;

const AmenitiesTitle = styled.p`
  width: 30%;
  margin-left: 5%;
  margin-top: 20px;
  text-align: left;
  color: #6e6e6e;
  font-family: 14px;
  font-family: 'Poppins';
`;

const AmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  gap: 10px;
  padding-bottom: 50px;
`;

const AmenitiesList = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  height: 59px;
  background-color: #e8f2ef;
  color: #135846;
  transition: transform 0.3s ease;
  cursor: pointer;

        &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        }
`;

const AmenitiesIconContainer = styled.div``;
const ImageRightContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContactCardsContainer = styled.div`
  display: flex;
  flex: wrap;
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 70px;
`;

export {
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
  BookingsDetailsContainer,
  DataContainer,
  MainDataContainer,
  MainDivTitle,
  ImageContainer,
  MainDataBookings,
  TitleBookings,
  IdBookings,
  ContactBookings,
  ContactCardsContainer,
  IconPhoneContainer,
  SendMessageButton,
  IconChatContainer,
  CheckinOutDataContainer,
  CheckinDataContainer,
  CheckinDataSpan,
  CheckinDataDate,
  Line,
  MainParagraph,
  AmenitiesTitle,
  AmenitiesList,
  AmenitiesContainer,
  AmenitiesIconContainer,
  ImageRightContainer,
};
