import React from "react";
import Perfil from "../assets/images/perfil.jpg";
import { FcOk } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
import { ContactContainer, DataDescription, DataUserContainer, DataUserContent, IconsContainer, ImageContainer, MainCard, ParagraphContact } from "../styles/CardContactStyled";

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
                        <img src={Perfil} alt="contact" />
                    </ImageContainer>
                    <DataUserContainer>
                        <DataUserContent>Damian Silvera</DataUserContent>
                        <DataDescription>4m ago</DataDescription>
                    </DataUserContainer>
                    <IconsContainer>
                        <FcOk size={20}></FcOk>
                        <GiCancel size={20} color={"red"}></GiCancel>
                    </IconsContainer>
                </ContactContainer>
            </MainCard>
        </div>
    );
};

export default CardContact;
