import styled from "styled-components";

    const TableContainer = styled.div`
    margin: 0 auto;
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    padding-bottom: 150px;
    transition: margin-left 0.5s;
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
    font-family: 'Poppins';
    
    `;
    const TableRow = styled.tr`
    border-top: 1px solid rgb(212, 212, 212);
    /* :hover {
        box-shadow: 0px 4px 30px #00000014;
    } */
    `;

    const TableData = styled.td`
    padding: 15px;
    img {
        width: 45px;
        height: 45px;
        border-radius: 8px;
    }
    `;
//---------------------------------------------
    const RowHeader = styled.tr`
    border-bottom: 1px solid #ccc;

    `;
    const Paragraph = styled.p`
    max-width: 300px;
    font-size: 16px;
    line-height:25px;
    font-family: 'Poppins';
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
    font-family: 'Poppins';
    text-align: center;
    letter-spacing: 0px;
    width: 110px;
    height: 50px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgcolor};
    padding: 13px ;
    border: none;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    }
`;
//---------------------------------------------
const ButtonRequest = styled.button`
    font-size: 19px;
    font-family: 'Poppins';
    text-align: center;
    letter-spacing: 0px;
    width: 160px;
    height: 50px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgcolor};
    border: ${(props) => props.border};
    padding: 13px ;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);}
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
    font-family: 'Poppins';
    padding: 13px 23px;
    border: none;
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
};

