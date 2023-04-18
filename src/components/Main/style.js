import styled from 'styled-components';
import { ReactComponent as ellipse } from "../../assets/icons/ellipse.svg"

const Container = styled.div`
  max-width:1500px;
  width:100%;
  /* background:#EFF2F1; */
  display: flex;
  gap: 200px;
  align-items: center;
  margin: 150px auto;
`;

const Price = styled.pre``

const Title = styled.h3`
font-size: 40px;
font-weight: 600;
`

const Text = styled.p`
  margin: 27px 0 44px 0;
`

const Button = styled.button`
    width:${(props) => props.w ? props.w + "px" : "122px"};
    height:${(props) => props.h ? props.h + "px" : "50px"};
    background: ${(props) => props.bg ? props.bg : "black"};
    color: ${(props) => props.color ? props.color : "white"};
    margin-top: ${(props) => props.mt ? props.mt + "px" : "0px"};
    border: ${(props) => props.border ? props.border : "none"};
    padding: ${(props) => props.padding ? props.padding + "px" : "0px"};
    border-radius: 30px;
    cursor:pointer;
    :active{
        transform: scale(0.95);
    }
`

const Box = styled.div`
  width: 296px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover{
    .imgs{
      position: relative;
      z-index: 1;
      bottom: 50px;
    }
    .ll{
      position: relative;
      z-index: 1;
      bottom: 20px;
    }
    .ls{
      position: absolute;
      display: flex;
      flex-direction: column;
    }
  }
`

const Img = styled.img`
  width: 189px;
  height: 261px;
`
const Boxes = styled.div`
  display: none;
  width: 296px;
  height: 307px;
  background: var(--lime);
  border-radius: 15px;
`

const Ellipse = styled(ellipse)`
/* display: none; */
visibility: hidden;
:hover{
display: block;
}
`

export { Container, Ellipse,Price, Button, Text, Title, Box, Img, Boxes };
