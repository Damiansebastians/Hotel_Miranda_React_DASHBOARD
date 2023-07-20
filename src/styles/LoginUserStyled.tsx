import { styled } from "styled-components";

const FormAccess = styled.div`
  display: flex;
  margin: 45px auto;
  padding: 15px;
  align-items: center;
  flex-direction: column;
  max-width: 55vh;
  width: 80%;
  height: 85vh;
  background: #ffffff;
  box-shadow: 0px 8px 32px 0px #000000;
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  gap: 3%;
`;

const TitleForm = styled.h2`
  font-family: "Roboto";
  font-weight: bold;
  color: green;
`;

const InfoForm = styled.p`
  width: 80%;
  margin-top: -20px;
  font-family: "Helvetica", sans-serif;
  font-size: 18px;
  color: #000000;
  text-transform: none;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForgotPasswordForm = styled.h4`
  cursor: pointer;
  color: blueviolet;
`;

export {
  FormAccess,
  TitleForm,
  InfoForm,
  InputForm,
  ButtonForm,
  ForgotPasswordForm
}