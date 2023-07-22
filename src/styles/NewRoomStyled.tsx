import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 100px;
    font-family: "Poppins";
    color: #393939;
`

const FormRoomContainer = styled.form`
    max-width: 850px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    padding: 20px 10%;
    margin: 0 auto;

    label, input{
        display:block
    }

    label{
        font-weight: 600;
        font-size: 18px;
        margin-top: 20px
    }

    input,textarea,select{
        outline: none;
        padding: 5px 0;
        border-radius: 5px;
        border: 1px solid #7c7c7c
    }

    input[type="file"]{
        border: none
    }
`

const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const FormPhoto = styled.div`
    width: 180px;
    height: 150px;
    border: 1px solid black;
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgInput = styled.input`
    display: block;
    margin: 0 auto;
    margin-top: 10px;
`

const FormMain = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const OfferContainer = styled.div`
    label{
        &:first-child{
            font-weight: 600;
        }
        font-weight: 400;
        display: inline;
    }

    input{
        display: inline;
    }
`

const FormBtn = styled.input`
    cursor: pointer;
    color: #393939;
    border-radius: 12px;
    border: 1px solid #393939;
    margin-top: 20px;
    background: none;

    &:hover{
        transition: all .2s;
        transform: scale(1.03);
        box-shadow: 0px 4px 30px #0000001A;
    }
`

const FormFooter = styled.div`
    display: flex;
    justify-content: center;
`

export {
    MainContainer,
    FormRoomContainer,
    FormHeader,
    FormPhoto,
    ImgInput,
    FormMain,
    OfferContainer,
    FormBtn,
    FormFooter
}