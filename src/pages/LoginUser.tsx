import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/Logo_Hotel.png";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ButtonForm, ForgotPasswordForm, FormAccess, InfoForm, InputForm, TitleForm } from "../styles/LoginUserStyled";


function LoginUser() {
  const navigate = useNavigate();
  const { login, isLogged } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password);
    navigate("/dashboard");
  };

  useEffect(() => {
      isLogged && navigate("/dashboard") 
  }, [isLogged, navigate])
  

  return (
    <form data-test-id="login-form" onSubmit={handleSubmit}>
      <FormAccess>
        <TitleForm>Login for Access to Dashboard</TitleForm>
        <img
          src={logo}
          alt="Logo Hotel"
          style={{
            width: "170px",
            marginTop: "-20px",
          }}
        />
        <InfoForm>
          <p>Please login using the following credentials:</p>
          Email: admin@admin.com
          Password: admin
        </InfoForm>
        <InputForm>
          <Input
            type="text"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label htmlFor="email"></label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
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
};

export default LoginUser;
