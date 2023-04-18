import styled from 'styled-components';
import { ReactComponent as icon } from '../../assets/icons/envelope.svg';
import { ReactComponent as telegram } from '../../assets/icons/telegram.svg';

const Icon = styled(icon)``

const Section = styled.section`
display: flex;
max-width:1500px;
  width:100%;
  margin: 0 auto;
  position: relative;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`
const Text = styled.h3`
margin-left: 21px;
text-align: left;
`

const Telegram = styled(telegram)`
background-color:var(--green);
`
const Image = styled.img`
margin-right: 0;
width: 500px;
height: 500px;
position: absolute;
top:-130px ;
right: 0;
`

const Top = styled.div`
display: flex;
align-items: center;
margin: 0;
`
const Bottom = styled.div`
display: flex;
margin: 23px 0 74px 0;
`

const Input = styled.input`
width: 262px;
height: 45.79px;
border: 1px solid #C4C4C4;
border-radius: 10px;
padding: 22px;
margin-left:${({ ml }) => ml ? ml + "px" : "0px"};
font-size: 16px;
`

const Button = styled.button`
margin-left:${({ ml }) => ml ? ml + "px" : "0px"};
background-color: var(--green);
border-radius: 10px;
width: 50px;
height: 47px;
display: flex;
align-items: center;
justify-content: center;
border: none;
outline: none;
`

export { Section, Telegram, Button, Wrapper, Text, Input, Top, Bottom, Icon, Image };
