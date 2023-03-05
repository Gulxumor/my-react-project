import styled from 'styled-components';
import { ReactComponent as truck } from '../components/assets/icons/truck.svg';
import { ReactComponent as returnImg } from '../components/assets/icons/return.svg';
import { ReactComponent as shopBag } from '../components/assets/icons/shop-bag.svg';
import { ReactComponent as support } from '../components/assets/icons/support.svg';

const Container = styled.div`
  max-width:1500px;
  width:100%;
  margin: 0 auto 71px auto;
  border: 1px solid black;
  display: flex;
`;
const Truck = styled(truck)``
const Return = styled(returnImg)``
const Shop = styled(shopBag)``
const Support = styled(support)``

const Right = styled.div``

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`
const Image = styled.img`
  max-width: 514.82px;
  max-height: 629.1px;
  border-radius: 10px;
`

const Wrapper = styled.div`
  margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};
border:2px solid red;
`

const Title = styled.h3`
  max-width: 261px;
  max-height: 41px;
  width:${({ w }) => w ? w + "px" : "88px"};
  height:${({ h }) => h ? h + "px" : "22px"};
  font-size: ${({ fs }) => fs ? fs + "px" : "14px"};
  line-height: ${({ lh }) => lh ? lh + "px" : "22px"};
  margin-bottom: ${(props) => props.mb ? props.mb + "px" : "9px"};
  font-style: normal;
  font-weight: 600;
`

const Text = styled.h4`
  width:${({ w }) => w ? w + "px" : "247px"};
  height:${({ h }) => h ? h + "px" : "78px"};
  line-height:${({ lh }) => lh ? lh + "px" : "22px"};
  margin-bottom: ${(props) => props.mb ? props.mb + "px" : "0px"};
  margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`

const Top = styled.div``
const Bottom = styled.div`
display: flex;
flex-wrap: wrap;
`

export { Container, Text, Title, Left, Truck, Shop, Support, Return, Bottom, Wrapper, Top, Right, Image };
