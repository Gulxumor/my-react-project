import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generics/Button";
import { Input } from "../Generics/Input";
import { Container, Wrapper } from "./style";

export const Register = () => {
  const navigate = useNavigate();
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = () => {
    const user = {
      fullname: fullnameRef?.current?.value,
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    localStorage.setItem("user-info", JSON.stringify(user));
    navigate("/sign-in");
  };

  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Register</Wrapper.Title>
        <Input type="text" ref={fullnameRef} placeholder="Full Name" />
        <Input type="email" ref={emailRef} placeholder="Email" />
        <Input type="password" ref={passwordRef} placeholder="Password" />
        <Button width="100%" onClick={register}>
          Register
        </Button>
        <Wrapper.Subtitle onClick={() => navigate("/sign-in")}>
          Do you already have an account? Login
        </Wrapper.Subtitle>
      </Wrapper>
    </Container>
  );
};
