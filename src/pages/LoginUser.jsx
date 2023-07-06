import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/Logo_Hotel.png";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/loginSlice";

function LoginUser() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogged = useSelector((state) => state.loginSlice.isLogged);

  const dispatch = useDispatch();

  if (isLogged) {
    navigate("/dashboard");
  }

  return (
    <form onSubmit={() => dispatch(login({ email, password }))}>
      <FormAccess>
        <TitleForm>Login for Access to Dashboard</TitleForm>
        <img src={logo} alt="Logo Hotel" style={{
                width:'170px',
                marginTop: '-20px'}} />
        <InfoForm>
          <p>Please login using the following credentials:</p>
          Email: admin@gmail.com 
          Password: admin
        </InfoForm>
        <InputForm>
          <Input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoCompleted="off"
            placeholder="Email"
          />
          <label htmlFor="email"></label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoCompleted="off"
            placeholder="Password"
          />
          <label htmlFor="password"></label>
        </InputForm>
        <ButtonForm>
          <Button content="Sign Up">Login</Button>
        </ButtonForm>
        <ForgotPasswordForm>Forgot Password?</ForgotPasswordForm>
      </FormAccess>
    </form>
  );
}

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
  font-family: 'Helvetica', sans-serif;
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

export default LoginUser;
