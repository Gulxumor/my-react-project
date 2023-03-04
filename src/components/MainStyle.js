import styled from 'styled-components';

const Container = styled.div`
max-width:1500px;
  width:100%;
  margin: auto;
  border: 1px solid black;
`;

const Title = styled.h2`
margin-top: 270px;
`

const Text = styled.p`
margin: 27px 0 44px 0;
`

const Button = styled.button`
    width:${(props) => props.w ? props.w + "px" : "122px"};
    height:${(props) => props.h ? props.h + "px" : "50px"};
    background: ${(props) => props.bg ? props.bg : "black"};
    color: ${(props) => props.color ? props.color : "white"};
    border: ${(props) => props.border ? props.border : "none"};
    padding: ${(props) => props.padding ? props.padding + "px" : "0px"};
    border-radius: 30px;
    cursor:pointer;
    :active{
        transform: scale(0.95);
    }

`

export { Container, Button, Text, Title };
