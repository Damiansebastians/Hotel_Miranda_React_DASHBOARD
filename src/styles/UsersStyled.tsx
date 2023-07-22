import styled from "styled-components";
import { BgColorProps } from "../Interfaces/StyledInterface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ListTitleTopProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  selected?: boolean;
}

    const TableContainer = styled.div`
    border-collapse: collapse;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;
    margin-top:127px;
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
    padding: 25px;

    img {
        width: 88px;
        height: 88px;
        border-radius: 12px;
        transition: transform 0.3s ease;

        &:hover{
        transform: scale(1.1);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        }}
    `;

    const RowHeader = styled.tr`
    border-bottom: 1px solid #cccccc;
    `;

    const Paragraph = styled.p`
    max-width: 300px;
    font-weight: bold;
    color: "#393939";
    font-family: 'Poppins';
    `;

    const Span = styled.span`
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
    color: #212121;
    `;

    const HeaderContainer = styled.div`
    width: 100%;
    display: flex;

    `;
    const ListTitleTopContainer = styled.div`
    display: flex;
    width: 60%;
    margin-bottom: 50px;
    `;
    const ListTitleTop = styled.p<ListTitleTopProps>`
    color: ${(props) => props ? "#135846" : "rgb(110, 110, 110)"};
    font-weight: ${(props) => (props ? "bold" : "500")};
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

    const NewRoomButtonContainer = styled.div`
    display: flex;
    `;

    const NewRoomButton = styled.button<BgColorProps>`
    width: 170px;
    height: 49px;
    border-radius: 12px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    background-color: ${(props) => props.bgcolor};
    color: "#ffffff";
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
    NewRoomButtonContainer,
    NewRoomButton,
};
