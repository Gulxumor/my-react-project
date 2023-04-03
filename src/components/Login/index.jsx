// import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Input, Text, Title, Wrapper } from "./style.js";

const Login = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSave = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          username: nameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
        })
      );
      setLoading(false);
      window.location.reload();
      navigate("/main");
    }, 2000);
  };

  return (
    <Container>
      <Wrapper>
        <Text>Login</Text>
        <div>
          <Title>Name:</Title>
          <Input placeholder="Enter your name" ref={nameRef} type="text" />
        </div>

        <div>
          <Title>Email:</Title>
          <Input placeholder="Enter your email" ref={emailRef} type="email" />
        </div>

        <div>
          <Title>Password:</Title>
          <Input
            placeholder="Enter your password"
            ref={passwordRef}
            type="password"
          />
        </div>
        <div>
          <Button type="submit" onClick={onSave}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Login;

//  {login.map((e) => (
//             <div key={e?.id}>
//               <Title>{e?.title}</Title>
//               <Input
//                 name={e.type}
//                 type={e?.type}
//                 ref={e?.ref}
//                 placeholder={e?.placeholder}
//                 {...register(e?.type)}
//                 required
//               />
//             </div>
//           ))}