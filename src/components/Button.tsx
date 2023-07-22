import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(to right, #0a3326 0%, #14b684 79%);
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 65%;
  padding: 20px 0px;
  border: none;
  color: #ffffff;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;

    &:hover{
      transform: scale(1.1);
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    }
`;

export default Button;