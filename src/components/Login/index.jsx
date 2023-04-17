import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generics/Button";
import { Input } from "../Generics/Input";
import { Container, Wrapper } from "./style";

export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = () => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (
      userInfo?.email === emailRef?.current?.value &&
      userInfo?.password === passwordRef?.current?.value
    ) {
      localStorage.setItem("tokenRymo", "bBkpBDVbkJD0iEuP8NQ1jkIIZgL97JOJ");
      navigate("/home");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Login</Wrapper.Title>
        <Input type="email" ref={emailRef} placeholder="Email" />
        <Input type="password" ref={passwordRef} placeholder="Password" />
        <Button onClick={login} width="100%">
          Login
        </Button>
        <Wrapper.Subtitle onClick={() => navigate("/sign-up")}>
          Do you have an account? Register
        </Wrapper.Subtitle>
      </Wrapper>
    </Container>
  );
};
