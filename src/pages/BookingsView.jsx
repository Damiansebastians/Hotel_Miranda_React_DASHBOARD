import { useSelector, useDispatch } from "react-redux";
import { HiPhone } from "react-icons/hi";
import { BsChatText } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleBooking } from "../store/slices/bookingSlice";
import {
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
  ImageRightContainer,
} from "../styles/BookingsStyled";

const BookingsView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const bookingSingleStore = useSelector(
    (state) => state.bookingsSlice.singleBooking
  );

  useEffect(() => {
    dispatch(getSingleBooking(Number(id)));
  }, [dispatch, id]);

  return (
    <>
      <BookingsDetailsContainer>
        <DataContainer>
          <MainDataContainer>
            <MainDivTitle>
              <ImageContainer>
                <img src={bookingSingleStore.img} alt="pic" />
              </ImageContainer>
              <MainDataBookings>
                <TitleBookings>{bookingSingleStore.Guest}</TitleBookings>
                <IdBookings>
                  ID {bookingSingleStore.id} /10000541651
                </IdBookings>
                <ContactBookings>
                  <IconPhoneContainer>
                    <HiPhone></HiPhone>
                  </IconPhoneContainer>
                  <SendMessageButton>
                    <IconChatContainer>
                      <BsChatText />
                    </IconChatContainer>
                    Send Message
                  </SendMessageButton>
                </ContactBookings>
              </MainDataBookings>
            </MainDivTitle>
            <CheckinOutDataContainer>
              <CheckinDataContainer margin={"110px"}>
                <CheckinDataSpan>Check in</CheckinDataSpan>
                <CheckinDataDate>
                  {bookingSingleStore.Check_in} | 08:23 AM
                </CheckinDataDate>
              </CheckinDataContainer>
              <CheckinDataContainer>
                <CheckinDataSpan>Check out</CheckinDataSpan>
                <CheckinDataDate>
                  {bookingSingleStore.Check_out}
                </CheckinDataDate>
              </CheckinDataContainer>
            </CheckinOutDataContainer>
            <Line></Line>
            <CheckinOutDataContainer>
              <CheckinDataContainer margin={"200px"}>
                <CheckinDataSpan>Room info</CheckinDataSpan>
                <CheckinDataDate>
                  {bookingSingleStore.Room_type}
                </CheckinDataDate>
              </CheckinDataContainer>
              <CheckinDataContainer>
                <CheckinDataSpan>Price</CheckinDataSpan>
                <CheckinDataDate>$145/night</CheckinDataDate>
              </CheckinDataContainer>
            </CheckinOutDataContainer>
            <MainParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </MainParagraph>
            <AmenitiesTitle>Facilities</AmenitiesTitle>
            <AmenitiesContainer>
              <AmenitiesList>
                <AmenitiesIconContainer>
                  <BiBed />
                </AmenitiesIconContainer>
                3 Bed Space
              </AmenitiesList>
              <AmenitiesList>
                <AmenitiesIconContainer>
                  <MdSecurity></MdSecurity>
                </AmenitiesIconContainer>
                24 Hours Guard
              </AmenitiesList>
              <AmenitiesList>
                <AmenitiesIconContainer>
                  <AiOutlineWifi size={18} />
                </AmenitiesIconContainer>
                Free Wifi
              </AmenitiesList>
              <AmenitiesList>2 Bathroom</AmenitiesList>
              <AmenitiesList>Air Conditioner</AmenitiesList>
              <AmenitiesList>Television</AmenitiesList>
            </AmenitiesContainer>
          </MainDataContainer>
        </DataContainer>
        <ImageRightContainer>
          <img src={bookingSingleStore.img} alt="img" />
        </ImageRightContainer>
      </BookingsDetailsContainer>
      )
    </>
  );
};

export default BookingsView;
