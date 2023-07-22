import React, { useEffect, useState } from 'react'
import { DataContainer, MainDataContainer, MainDivTitle } from '../styles/BookingsStyled';
import { useAppDispatch } from '../hooks/hooks';
import { addRoom } from '../store/slices/roomsSlice';
import { FormFooter, FormHeader, FormMain, FormPhoto, FormRoomContainer, ImgInput } from '../styles/NewRoomStyled';
import { ButtonList } from '../styles/RoomsStyled';

interface IRoom {
  type: string;
  price: string;
  number: number;
  discount: string;
  description: string;
  offer: number; 
  amenities: string;
}

const NewRoom = () => {

  const dispatch = useAppDispatch()
  const [img, setImg] = useState([]);
  const [imgURL, setImgURL] = useState<string[]>([]);
  const [type, setType] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [discount, setDiscount] = useState<string>();
  const [amenities, setAmenities] = useState<string>();

  useEffect(() => {
    if (img.length > 0) {
      let arrAux: string[] = [];
      for (let i = 0; i < img.length; i++) {
        let objectImg: string = URL.createObjectURL(img[i])
        arrAux.push(objectImg)
      }
      setImgURL(arrAux)
    } else {
      setImgURL([])
    }
  }, [img])

  const handleImageChange = (event: any) => {
    setImg(event.target.files)
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmenities(e.target.value)
  }

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (type && price && number && discount && amenities) {
      const room: IRoom = {
        type,
        price,
        number: 0,
        discount,
        description: "",
        offer: 0,    
        amenities,
      };
      dispatch(addRoom(room));
    }
  };

  return (
    <>
      <MainDataContainer
        style={{
          width: "90%",
          marginTop: "80px",
        }}
      >
        <DataContainer>
          <FormRoomContainer onSubmit={handleSubmit}>
            <MainDivTitle
              style={{
                fontSize: "40px",
                fontFamily: "Poppins",
                margin: "20px",
                justifyContent: "center",
              }}
            >
              Create a Room
            </MainDivTitle>
            <FormHeader>
              {img.length >= 3 ? (
                imgURL.map((item, i) => (
                  <FormPhoto key={i}>
                    <img src={item} alt={"Photoroom"} />
                  </FormPhoto>
                ))
              ) : (
                <>
                  <FormPhoto>Select a photo</FormPhoto>
                  <FormPhoto>Select a photo</FormPhoto>
                  <FormPhoto>Select a photo</FormPhoto>
                </>
              )}
            </FormHeader>
            <ImgInput
              type="file"
              name="photos"
              id="photos"
              accept="image/png, image/jpeg"
              multiple
              onChange={handleImageChange}
            />
            <FormMain>
              <div>
                <div>
                  <label htmlFor="type">Type</label>
                  <select name="type" id="type" onChange={handleTypeChange}>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Superior">Double Superior</option>
                    <option value="Suite">Suite</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="number">Number</label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    onChange={handleNumberChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    onChange={handlePriceChange}
                  />
                </div>
                <div>
                  <label htmlFor="discount">Discount</label>
                  <input
                    type="number"
                    name="discount"
                    id="discount"
                    onChange={handleDiscountChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="amenities">Amenities</label>
                <select
                  name="amenities"
                  id="amenities"
                  onChange={handleAmenitiesChange}
                  multiple
                >
                  <option value="tv">TV</option>
                  <option value="bar">Bar</option>
                  <option value="sauna">Sauna</option>
                  <option value="jacuzzi">Jacuzzi</option>
                </select>
              </div>
            </FormMain>
            <FormFooter></FormFooter>
            <ButtonList
              type="submit"
              bgcolor={"#135846"}
              style={{
                width: "229px",
                border: "2px solid #135846",
                margin: "20px",
              }}
            >
              Create Room
            </ButtonList>
          </FormRoomContainer>
        </DataContainer>
      </MainDataContainer>
    </>
  );
}

export default NewRoom;

