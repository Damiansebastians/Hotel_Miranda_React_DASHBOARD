import styled from "styled-components";

//------------------------BOOKINGS VIEW------------------------------

const BookingsDetailsContainer = styled.div`
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0px 3px 10px #00000005;
  margin-top: 127px;
  margin-left: ${(props) => props.margin};
  transition: margin-left 0.5s;
  margin-right: 100px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
`;

const DataContainer = styled.div`
  width: 50%;
`;

const MainDataContainer = styled.div``;
const MainDivTitle = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 40px;
  gap: 30px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 25px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

const MainDataBookings = styled.div``;
const TitleBookings = styled.p`
  text-align: left;
  font: normal normal 600 30px/46px Poppins;
  margin: 0 auto;
`;

const IdBookings = styled.p`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  color: #799283;
`;

const ContactBookings = styled.div`
  display: flex;
`;

const IconPhoneContainer = styled.div`
  width: 59px;
  height: 39px;
  border: 1px solid #e8f2ef;
  border-radius: 12px;
  margin-right: 16px;
  :first-child {
    padding-top: 16px;
  }
`;

const SendMessageButton = styled.button`
  width: 200px;
  height: 49px;
  border-radius: 12px;
  background-color: #135846;
  color: #fff;
  border: none;
  margin-right: 5px;
`;

const IconChatContainer = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

const CheckinOutDataContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 5%;
`;

const CheckinDataContainer = styled.div`
  text-align: left;
  margin-right: ${(props) => props.margin};
`;

const CheckinDataSpan = styled.p`
  color: #6e6e6e;
  font: normal normal normal 14px Poppins;
`;

const CheckinDataDate = styled.p`
  font-size: 24px;
  font-family: 'Poppins';
  font-weight: bold;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #e8d8d8;
  margin-top: 35px;
  margin-left: 5%;
`;

const MainParagraph = styled.p`
  width: 80%;
  margin-left: 5%;
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #363636;
`;

const AmenitiesTitle = styled.p`
  width: 40%;
  margin-left: 5%;
  margin-top: 60px;
  text-align: left;
  color: #6e6e6e;
  font: normal normal normal 14px Poppins;
`;

const AmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  gap: 20px;
  padding-bottom: 50px;
`;

const AmenitiesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  width: 209px;
  height: 59px;
  background-color: #e8f2ef;
  color: #135846;
`;

const AmenitiesIconContainer = styled.div``;
const ImageRightContainer = styled.div`
  width:100%;
  height:100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
BookingsDetailsContainer, 
DataContainer,
MainDataContainer,
MainDivTitle,
ImageContainer,
MainDataBookings,
TitleBookings,
IdBookings,
ContactBookings,
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
ImageRightContainer 
}
