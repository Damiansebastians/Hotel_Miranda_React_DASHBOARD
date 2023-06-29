import styled from "styled-components";

    const MainDIvContainer = styled.div`
    ${"" /* width:75%; */}
    display:flex;
    margin-left: ${(props) => props.margin};
    transition: margin-left 0.5s;
    `;
    const ChildDivContainer = styled.div`
    display: flex;
    width: 100%;
    height: 125px;
    padding-right: 35px;
    margin-right: 25px;
    margin-top: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    `;

    const ChildDivColor = styled.div`
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
    font: normal normal 600 30px Poppins;
    color: #393939;
    `;
    const DashboardSpan = styled.p`
    margin: 0px;
    color: #787878;
    font-size: 14px;
    `;
    const IconContainer = styled.div`
    color: ${(props) => props.color};
    margin-top: 15px;
    `;

    export {
    MainDIvContainer,
    ChildDivContainer,
    ChildDivColor,
    DashboardParagraph,
    DashboardSpan,
    IconContainer,
};
