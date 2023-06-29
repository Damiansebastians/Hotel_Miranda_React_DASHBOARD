import styled from "styled-components";
import { NavLink } from "react-router-dom";

    export const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: ${(props) => props.display};
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 5%;
    background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
    box-shadow: 13px 3px 40px rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    transition: all 0.5s ease 0s;
    `;

// ----------- LOGO
    export const Logo = styled.div`
        height: 100px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        gap: 8px;
        margin-bottom: 35px;

        h4 {
            font-family: "Poppins";
            font-weight: 600;
            font-size: 36px;
            margin-bottom: 2px;
        }

        p {
            text-align: left;
            font-weight: 300;
            font-size: 18px;
            font-family: 'Poppins';
            letter-spacing: 0px;
            color: #5D5449;
        }
        
        img {
            width: 100px;
            margin-top: 10px;
        }
    `;

//--------------LIST
    export const LinkContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-family: "Poppins";
    font-style: 18px;
    font-weight: normal;
    color: #799283;
    padding: 0;
    list-style: none;
    width: 100%;

    li:hover {
        font-weight: bold;
        scale: 1.3;
        cursor: pointer;
        color: #E23428;
    }

    svg {
        font-size: 32px;
    }

    li {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items:center;
        gap: 1rem;
        font-size: 22px;

        div {
            width: 45px; 
            position: absolute;
            left: 0px;
            height: 100%;
        }

            &:hover div{
                background-color: #ff0000;
                border-radius: 20%;
            }
        }
    `;

    export const User = styled.div`
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 12px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2rem;
    margin: 15% 0;

    .user-image {
        width: 70px;
        height: 70px;
        background-color: #c5c5c5;
        border-radius: 8px;
    }

    h5 {
        text-align: center;
        font-family: "Poppins";
        font-size: 16px;
        font-weight: medium;
        letter-spacing: 0px;
        color: #393939;
        margin-top: 1rem;
        margin-bottom: 0.2rem;
    }

    p {
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0px;
        color: #b2b2b2;
        margin: 0;
        margin-bottom: 1rem;
    }

    button {
        background: #ebf1ef;
        border: none;
        border-radius: 8px;
        font-size: 12px;
        font-family: "Poppins";
        font-weight: 600;
        letter-spacing: 0px;
        color: #135846;
        padding: 0.7rem 2rem;
    }

    button:hover {
        cursor: pointer;
        scale: 1.1;
    }
    `;

    export const SideMenuUserImage = styled.img`
    width: 90px;
    height: 90px;
    background-color: #c5c5c5;
    border-radius: 8px;
    object-fit: cover;
    `;

    export const MenuLink = styled(NavLink)`
    font-weight: normal;
    color: #799283;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    &.active,
    &:hover {
        color: #E23428;
        font-weight: 800;
        font-size: 28px;
    }

    `;

    export const Copyright = styled.div`
    text-align: left;
    margin-top: 0;

    h6 {
        font-size: 20px;
        font-family: "Poppins";
        font-weight: 600;
        color: #212121;
        margin-bottom: 5px;
        margin-top: 0;
    }

    p {
        font-family: "Poppins";
        font-weight: 300;
        font-size: 18px;
        color: #799283;
        margin: 0;
}
`;

export const Design = styled.div`
    text-align: left;
    margin-left: -25px;
    
    p {
        font-family: "Poppins";
        font-weight: 300;
        font-size: 18px;
        color: #799283;
        margin: 0;
    }
`;
