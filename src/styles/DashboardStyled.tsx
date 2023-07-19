import styled from "styled-components";
import { BgColorProps, ColorProps } from "../Interfaces/StyledInterface";

    const MainDIvContainer = styled.div`
    margin-left: 380px;
    display:flex;
    transition: margin-left 0.5s;
    background-color: #f8f8f8;
    padding: 50px;
    `;
//---------------------------------------
    const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    `;
//----------------------------------------
    const ChildDivContainer = styled.div`
    display: flex;
    width: 100%;
    height: 125px;
    padding-right: 35px;
    margin-right: 25px;
    margin-bottom: 40px;
    background: #ffffff;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    }
    `;

    const ChildDivColor = styled.div<BgColorProps>`
    background-color: ${(props) => props.bgcolor};
    margin: 29px 22px 0 30px;
    width: 65px;
    height: 65px;
    border-radius: 8px;
    opacity: 1;
    `;
    const DashboardParagraph = styled.p`
    margin: 0px;
    padding-top: 29px;
    text-align: left;
    font: normal normal 600 30px 'Poppins';
    color: #393939;
    `;
    const DashboardSpan = styled.p`
    margin: 0px;
    color: #787878;
    font-size: 14px;
    `;
    const IconContainer = styled.div<ColorProps>`
    color: ${(props) => props.color};
    margin-top: 15px;
    `;

    export {
    MainDIvContainer,
    BoxContainer,
    ChildDivContainer,
    ChildDivColor,
    DashboardParagraph,
    DashboardSpan,
    IconContainer,
};
