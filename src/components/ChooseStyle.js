import styled from 'styled-components';
import { ReactComponent as truck } from '../components/assets/icons/truck.svg';
import { ReactComponent as returnImg } from '../components/assets/icons/return.svg';
import { ReactComponent as shopBag } from '../components/assets/icons/shop-bag.svg';
import { ReactComponent as support } from '../components/assets/icons/support.svg';

const Truck = styled(truck)``
const Return = styled(returnImg)``
const Shop = styled(shopBag)``
const Support = styled(support)``
const Image = styled.img``


const Container = styled.div`
/* background:#EFF2F1; */
  max-width:1500px;
  width:100%;
  margin:  auto;
  display: flex;
  margin-bottom: ${(props) => props.mb ? props.mb + "px" : "71px"};

`;

const Right = styled.img`
  max-width: 542px;
  max-height: 709.05px;
  width: 100%;
  height: 100%;
  border-radius: 10px;

`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`
const Wrapper = styled.div`
  margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};
`

const Title = styled.h3`
  max-width: 261px;
  max-height: 41px;
  width:${({ w }) => w ? w + "px" : "88px"};
  height:${({ h }) => h ? h + "px" : "22px"};
  font-size: ${({ fs }) => fs ? fs + "px" : "14px"};
  line-height: ${({ lh }) => lh ? lh + "px" : "22px"};
  margin-bottom: ${(props) => props.mb ? props.mb + "px" : "9px"};
  margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};
  font-style: normal;
  font-weight: 600;
`

const Text = styled.h4`
  width:${({ w }) => w ? w + "px" : "247px"};
  height:${({ h }) => h ? h + "px" : "78px"};
  line-height:${({ lh }) => lh ? lh + "px" : "22px"};
  margin: ${(props) => props.margin ? props.margin + "px" : "0px"};
  margin-bottom: ${(props) => props.mb ? props.mb + "px" : "26px"};
  margin-left: ${(props) => props.ml ? props.ml + "px" : "0px"};

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export { Container, Text, Title, Left, Truck, Shop, Support, Return, Bottom, Wrapper, Right, Image };
