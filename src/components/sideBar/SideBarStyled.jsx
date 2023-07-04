import styled from "styled-components";

//-------------------------------------
const Logo = styled.div`
        height: 100px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        margin-top: 25px;
        gap: 8px;
        margin-bottom: 35px;

        img {
            width: 100px;
            margin-top: 10px;
        }
`;
//------------------------------------
const TitleLogo = styled.h4`
            font-family: "Poppins";
            font-weight: 600;
            font-size: 36px;
            margin-bottom: 2px;
`;
//-----------------------------------
const TextLogo = styled.p`
            text-align: left;
            font-weight: 300;
            font-size: 18px;
            font-family: 'Poppins';
            letter-spacing: 0px;
            color: #5D5449;
`;
//----------------------------------
    const LateralMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 380px;
    position: fixed;
    background: #ffffff;
    box-shadow: 13px 3px 40px #00000005;
    transition: 0.5s;
    align-items: center;
    padding-right: 20px;
`;
//----------------------------------------
    const ListItems = styled.li`
    width: 70%;
    display: flex;
    padding: 20px 0px;
    border-radius: 6px;
    align-items: center;
    gap: 20px;
    transition: all 0.2s ease 0s;
    text-align: left;
    font: normal normal normal 18px/27px 'Poppins';
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
    list-style: none;
`;
//-------------------------------------------
    const ElementsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #799283;

    :hover{
        left: 0;
        color: #E23428;
        border-radius: 6px 0px 0px 6px;
        border-left: 8px solid #E23428;
    }
`;
//--------------------------------------------
    const AvatarImage = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 0px 6px 6px #00000022;

        & img{
            width: 100%;
            border-radius: 20px;

        }
    `;
//---------------------------------------------
    const CardAvatar = styled.div`
    width: 233px;
    background: #ffffff;
    box-shadow: 0px 20px 30px #00000035;
    border-radius: 18px;
    margin: 0 auto;
    margin-top: 60px;
    padding-top: 30px;
//---------------------------------------------
    `;
    const UserName = styled.p`
    text-align: center;
    font: normal normal medium 16px/25px 'Poppins';
    font-weight: bold;
    letter-spacing: 0px;
    color: #393939;
    `;
//----------------------------------------------
    const UserEmail = styled.p`
    text-align: center;
    font: normal normal 300 18px/18px 'Poppins';
    letter-spacing: 0px;
    color: #b2b2b2;
    `;
//----------------------------------------------
    const ButtonEdit = styled.button`
    background: #ebf1ef;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-family: "Poppins";
    font-weight: bold;
    color: #135846;
    padding: 15px 35px;
    margin-bottom: 24px;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;
//----------------------------------------------
    const Foot = styled.div`
    margin-left: 20%;
    display: flex;
    text-align:left;
    flex-direction: column;
`;
//-----------------------------------------------
    const LastTitle = styled.p`
    margin-top: 60px;
    margin-bottom: 0;
    font: normal normal 600 16px/25px 'Poppins';
    color: #212121;
    `;
//----------------------------------------------
    const AllRigths = styled.p`
    font: normal normal 300 14px/21px 'Poppins';
    color: #799283;
    `;
//----------------------------------------------
    const LinkContainer = styled.div`
    a :hover {
        color: #E23428;
        scale: 1.1;
    }
`;

    export {
    LateralMenu,
    Logo,
    ListItems,
    ElementsDiv,
    AvatarImage,
    CardAvatar,
    UserName,
    UserEmail,
    Foot,
    LastTitle,
    AllRigths,
    LinkContainer,
    ButtonEdit,
    TitleLogo,
    TextLogo,
};
