import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  margin-top:25px;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 65%;
  padding:20px 0 20px 0;
  border: none;
  color: white;
  border-radius: 50px;
  cursor: pointer;
`;