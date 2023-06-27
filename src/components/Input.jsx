import styled from "styled-components";

export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  margin-top:15px;
  margin-bottom:15px;
  border-radius: 50px;
  width: 80%;
  height: 45px;
  padding: 16px;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 16px;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 32px;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 16px;
  }
`;