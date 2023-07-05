import styled from "styled-components";

    const TableContainer = styled.div`
    border-collapse: collapse;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;
    align-items: center;
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
    `;

    const TableData = styled.td`
    padding: 15px;

    img {
        width: 150px;
        height: 77px;
        border-radius: 8px;
        transition: transform 0.3s ease;

        &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        }
    }
    `;
//--------------------------------------------
    const RowHeader = styled.tr`
    border-bottom: 1px solid #cccccc;
    `;

    const Paragraph = styled.p`
    max-width: 300px;
    font-weight: 500;
    color: #212121;
    font-family: 'Poppins';
    `;
//--------------------------------------------
    const Span = styled.span`
    color: #799283;
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
    color: #212121;
    `;
    //---------------------------------------------
    const ButtonList = styled.button`
    font-size: 19px;
    font-family: 'Poppins';
    text-align: center;
    letter-spacing: 0px;
    width: 110px;
    height: 50px;
    color: #ffffff;
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
    const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 100px;
    `;
    const ListTitleTopContainer = styled.div`
    display: flex;
    width: 60%;
    margin-bottom: 50px;
    `;
    const ListTitleTop = styled.p`
    color: ${(props) => props.selected ? "#135846" : "rgb(110, 110, 110)"};
    font-weight: ${(props) => (props.selected ? "bold" : "500")};
    padding: 12px 30px;
    border-bottom: 1px solid rgb(212, 212, 212);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
        font-weight: bold;
        cursor: pointer;
        border-bottom: 2px solid #135846;
    }
    `;
    //---------------------------------------------
    const NewRoomButtonContainer = styled.div`
    display: flex;
    `;
    //--------------------------------------------
    const NewRoomButton = styled.button`
    width: 170px;
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
    ButtonList,
    HeaderContainer,
    ListTitleTopContainer,
    ListTitleTop,
    NewRoomButtonContainer,
    NewRoomButton,
};
